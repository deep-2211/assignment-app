import '@testing-library/jest-dom';
import PageNotFound from './PageNotFound';
import { render, screen } from '@testing-library/react';
import { mockI18n } from '../test-utils/mocki18n';
import { LanguageProvider } from '../contexts/LanguageContext';

mockI18n({
  lbl_page__not_found: 'Page Not Found',
});

describe('PageNotFound Component', () => {
  it('should display `Page Not Found`', () => {
    render(
      <LanguageProvider>
        <PageNotFound />
      </LanguageProvider>,
    );

    const dashboardElement = screen.getByTestId('page-not-found');

    expect(dashboardElement).toBeInTheDocument();
    expect(dashboardElement).toHaveTextContent('Page Not Found');
  });
});
