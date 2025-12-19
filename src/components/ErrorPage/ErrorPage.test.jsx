import { render, screen } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';

describe("ErrorPage Component", () => {
    test("renders the error page", () => {
        render(<ErrorPage />);

        const errorImg = screen.getByAltText(/error image/i);

        expect(errorImg).toBeInTheDocument();
    });

    test("has the correct image source URL", () => {
        render(<ErrorPage />);

        const errorImg = screen.getByAltText(/error image/i);

        expect(errorImg).toHaveAttribute("src", "https://media.istockphoto.com/id/1449580178/vector/under-construction-sign-vector-for-banner-website-ig.jpg?s=612x612&w=0&k=20&c=Eqa3KodRrtCGvMAd0Iay7K5bsNIH37zBbnLCLDPPARQ=");
    });

    test("has the correct CSS class for styling", () => {
        render(<ErrorPage />);
        
        const errorImg = screen.getByAltText(/error image/i);

        expect(errorImg).toHaveClass("error-image");
  });
});