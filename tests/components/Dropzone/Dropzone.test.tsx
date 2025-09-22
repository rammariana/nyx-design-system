import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Dropzone } from '../../../src/components/Dropzone';

describe('Dropzone', () => {
  const childText = 'Arrastra tu archivo aquí';

  function getContainer() {
    return Array.from(document.querySelectorAll('div'))
      .find(div => div.className.match(/container/) && div.textContent?.includes(childText));
  }
  function getContentDiv() {
    return Array.from(document.querySelectorAll('div'))
      .find(div => div.className.match(/content/) && div.textContent?.includes(childText));
  }

  it('renderiza el children correctamente', () => {
    render(<Dropzone onFileAccepted={() => {}}>{childText}</Dropzone>);
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('aplica la clase base container al contenedor principal', () => {
    render(<Dropzone onFileAccepted={() => {}}>{childText}</Dropzone>);
    const container = getContainer();
    expect(container?.className).toMatch(/container/);
  });

  it('aplica className adicional si se proporciona', () => {
    render(
      <Dropzone onFileAccepted={() => {}} className="custom-class">
        {childText}
      </Dropzone>
    );
    const container = getContainer();
    expect(container?.className).toMatch(/custom-class/);
  });

  it('activa la clase dragActive al hacer dragenter y la elimina al dragleave', () => {
    render(<Dropzone onFileAccepted={() => {}}>{childText}</Dropzone>);
    const container = getContainer()!;
    fireEvent.dragEnter(container);
    expect(container.className).toMatch(/dragActive/);
    fireEvent.dragLeave(container);
    expect(container.className).not.toMatch(/dragActive/);
  });

  it('llama a onFileAccepted al seleccionar un archivo por input', () => {
    const onFileAccepted = vi.fn();
    render(<Dropzone onFileAccepted={onFileAccepted}>{childText}</Dropzone>);
    const container = getContainer()!;
    const input = container.querySelector('input[type="file"]')!;
    const file = new File(['dummy'], 'test.pdf', { type: 'application/pdf' });
    fireEvent.change(input, { target: { files: [file] } });
    expect(onFileAccepted).toHaveBeenCalledWith(file);
  });

  it('llama a onFileAccepted al hacer drop de un archivo', () => {
    const onFileAccepted = vi.fn();
    render(<Dropzone onFileAccepted={onFileAccepted}>{childText}</Dropzone>);
    const container = getContainer()!;
    const file = new File(['dummy'], 'test.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fireEvent.drop(container, {
      dataTransfer: {
        files: [file],
        types: ['Files'],
        getData: () => '',
        setData: () => {},
        clearData: () => {},
        items: [],
      },
      preventDefault: () => {},
      stopPropagation: () => {},
    });
    expect(onFileAccepted).toHaveBeenCalledWith(file);
  });

  it('el input acepta solo archivos .pdf y .xlsx por defecto', () => {
    render(<Dropzone onFileAccepted={() => {}}>{childText}</Dropzone>);
    const container = getContainer()!;
    const input = container.querySelector('input[type="file"]')!;
    expect(input).toHaveAttribute('accept', '.pdf, .xlsx');
  });

  it('el contenido visual está dentro de un div con clase content', () => {
    render(<Dropzone onFileAccepted={() => {}}>{childText}</Dropzone>);
    const contentDiv = getContentDiv();
    expect(contentDiv?.className).toMatch(/content/);
  });

  // Nuevos tests para la variante image
  describe('Image Variant', () => {
    it('aplica la clase imageVariant cuando variant es image', () => {
      render(<Dropzone variant="image" onFileAccepted={() => {}}>{childText}</Dropzone>);
      const container = getContainer();
      expect(container?.className).toMatch(/imageVariant/);
    });

    it('muestra contenido por defecto cuando variant es image y no hay children', () => {
      render(<Dropzone variant="image" onFileAccepted={() => {}} />);
      expect(screen.getByText(/Arrastra una imagen aquí/)).toBeInTheDocument();
      expect(screen.getByText(/JPG, PNG, GIF/)).toBeInTheDocument();
    });

    it('acepta solo archivos de imagen cuando variant es image', () => {
      render(<Dropzone variant="image" onFileAccepted={() => {}} />);
      const input = document.querySelector('input[type="file"]')!;
      expect(input).toHaveAttribute('accept', 'image/*');
    });

    it('valida que el archivo sea una imagen cuando variant es image', () => {
      const onFileAccepted = vi.fn();
      render(<Dropzone variant="image" onFileAccepted={onFileAccepted} />);
      const input = document.querySelector('input[type="file"]')!;
      
      // Archivo que no es imagen
      const nonImageFile = new File(['dummy'], 'test.pdf', { type: 'application/pdf' });
      fireEvent.change(input, { target: { files: [nonImageFile] } });
      
      expect(onFileAccepted).not.toHaveBeenCalled();
      expect(screen.getByText(/Por favor selecciona un archivo de imagen válido/)).toBeInTheDocument();
    });

    it('acepta archivos de imagen válidos cuando variant es image', () => {
      const onFileAccepted = vi.fn();
      render(<Dropzone variant="image" onFileAccepted={onFileAccepted} />);
      const input = document.querySelector('input[type="file"]')!;
      
      // Archivo de imagen válido
      const imageFile = new File(['dummy'], 'test.jpg', { type: 'image/jpeg' });
      fireEvent.change(input, { target: { files: [imageFile] } });
      
      expect(onFileAccepted).toHaveBeenCalledWith(imageFile);
    });

    it('valida el tamaño máximo del archivo', () => {
      const onFileAccepted = vi.fn();
      render(<Dropzone variant="image" onFileAccepted={onFileAccepted} maxSize={1024} />);
      const input = document.querySelector('input[type="file"]')!;
      
      // Archivo muy grande
      const largeFile = new File(['x'.repeat(2000)], 'large.jpg', { type: 'image/jpeg' });
      fireEvent.change(input, { target: { files: [largeFile] } });
      
      expect(onFileAccepted).not.toHaveBeenCalled();
      expect(screen.getByText(/El archivo es demasiado grande/)).toBeInTheDocument();
    });
  });

  describe('Disabled State', () => {
    it('aplica la clase disabled cuando disabled es true', () => {
      render(<Dropzone disabled onFileAccepted={() => {}}>{childText}</Dropzone>);
      const container = getContainer();
      expect(container?.className).toMatch(/disabled/);
    });

    it('no llama a onFileAccepted cuando está deshabilitado', () => {
      const onFileAccepted = vi.fn();
      render(<Dropzone disabled onFileAccepted={onFileAccepted}>{childText}</Dropzone>);
      const container = getContainer()!;
      const input = container.querySelector('input[type="file"]')!;
      const file = new File(['dummy'], 'test.pdf', { type: 'application/pdf' });
      fireEvent.change(input, { target: { files: [file] } });
      expect(onFileAccepted).not.toHaveBeenCalled();
    });
  });
});
