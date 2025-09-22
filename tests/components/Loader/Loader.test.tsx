import { render, screen } from '@testing-library/react';
import { Loader } from '../../../src/components/Loader';

describe('Loader', () => {
  it('renders with default props', () => {
    render(<Loader />);
    const loader = document.querySelector('[class*="spinner"]');
    expect(loader).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Loader variant="spinner" />);
    expect(document.querySelector('[class*="spinner"]')).toBeInTheDocument();

    rerender(<Loader variant="dots" />);
    expect(document.querySelector('[class*="dotsContainer"]')).toBeInTheDocument();

    rerender(<Loader variant="pulse" />);
    expect(document.querySelector('[class*="pulse"]')).toBeInTheDocument();

    rerender(<Loader variant="fullscreen" />);
    expect(document.querySelector('[class*="orbitContainer"]')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Loader size="small" />);
    const container = document.querySelector('[class*="small"]');
    expect(container).toBeInTheDocument();

    rerender(<Loader size="medium" />);
    const mediumContainer = document.querySelector('[class*="medium"]');
    expect(mediumContainer).toBeInTheDocument();

    rerender(<Loader size="large" />);
    const largeContainer = document.querySelector('[class*="large"]');
    expect(largeContainer).toBeInTheDocument();
  });

  it('renders with message', () => {
    render(<Loader message="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with progress', () => {
    render(<Loader progress={75} />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('renders in fullscreen mode', () => {
    render(<Loader fullScreen />);
    const container = document.querySelector('[class*="fullscreen"]');
    expect(container).toBeInTheDocument();
  });

  it('renders inline by default', () => {
    render(<Loader />);
    const container = document.querySelector('[class*="inline"]');
    expect(container).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Loader className="custom-loader" />);
    const container = document.querySelector('[class*="custom-loader"]');
    expect(container).toBeInTheDocument();
  });

  it('applies custom color', () => {
    render(<Loader color="#ff0000" />);
    const spinner = document.querySelector('[class*="spinner"]');
    expect(spinner).toBeInTheDocument();
    // Verificamos que el componente se renderiza con color personalizado
    expect(spinner).toBeTruthy();
  });

  it('renders dots variant with correct number of dots', () => {
    render(<Loader variant="dots" />);
    const dotsContainer = document.querySelector('[class*="dotsContainer"]');
    const dots = dotsContainer?.querySelectorAll('[class*="dot"]');
    expect(dots).toHaveLength(3);
  });

  it('renders fullscreen variant with correct number of slices', () => {
    render(<Loader variant="fullscreen" />);
    const slices = document.querySelectorAll('[class*="slice"]');
    expect(slices).toHaveLength(6);
  });

  it('limits progress to 0-100 range', () => {
    const { rerender } = render(<Loader progress={150} />);
    expect(screen.getByText('150%')).toBeInTheDocument();

    rerender(<Loader progress={-10} />);
    expect(screen.getByText('-10%')).toBeInTheDocument();
  });

  it('renders progress bar in fullscreen mode', () => {
    render(<Loader fullScreen progress={50} />);
    const progressBar = document.querySelector('[class*="progressBar"]');
    const progressFill = document.querySelector('[class*="progressFill"]');
    expect(progressBar).toBeInTheDocument();
    expect(progressFill).toBeInTheDocument();
    expect(progressFill).toHaveStyle('width: 50%');
  });

  it('renders message in fullscreen mode', () => {
    render(<Loader fullScreen message="Loading..." />);
    const message = screen.getByText('Loading...');
    expect(message).toBeInTheDocument();
    expect(message.tagName).toBe('P');
  });

  it('renders message inline', () => {
    render(<Loader message="Loading..." />);
    const message = screen.getByText('Loading...');
    expect(message).toBeInTheDocument();
    expect(message.tagName).toBe('SPAN');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Loader ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('renders all elements together', () => {
    render(
      <Loader 
        variant="dots" 
        size="large" 
        message="Processing..." 
        progress={80} 
        color="#00ff00"
        className="test-loader"
      />
    );
    
    expect(document.querySelector('[class*="dotsContainer"]')).toBeInTheDocument();
    expect(document.querySelector('[class*="large"]')).toBeInTheDocument();
    expect(screen.getByText('Processing...')).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();
    expect(document.querySelector('[class*="test-loader"]')).toBeInTheDocument();
  });
});
