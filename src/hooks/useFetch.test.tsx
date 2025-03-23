import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { BASE_URL } from '../config/ApiConfig';
import useFetch from './useFetch';

describe('useFetch hook', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    localStorage.clear();
  });

  it('dummy test', () => {
    expect(true).toBeTruthy();
  });

  it('should return loading initially', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));
    const { result } = renderHook(() => useFetch('test-endpoint'));

    await waitFor(() => expect(result.current.loading).toBe(true));
  });

  it('should fetch data and return it', async () => {
    const mockData = { message: 'success' };
    localStorage.setItem('token', 'mock-token');
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result } = renderHook(() => useFetch('test-endpoint'));

    // Wait until data is fetched and state updates
    await waitFor(() => expect(result.current.data).toEqual(mockData));

    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/test-endpoint`, {
      headers: {
        Authorization: `Bearer mock-token`,
      },
    });
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('should handle fetch errors', async () => {
    fetchMock.mockRejectOnce(new Error('Fetch failed'));

    const { result } = renderHook(() => useFetch('test-endpoint'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe('Fetch failed');
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeNull();
  });

  it('should handle non-ok responses', async () => {
    fetchMock.mockResponseOnce('', {
      status: 500,
      statusText: 'Internal Server Error',
    });

    const { result } = renderHook(() => useFetch('test-endpoint'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe('Error: 500 Internal Server Error');
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
  });
});
