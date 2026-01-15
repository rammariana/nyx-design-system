import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Details } from "../../../src/components/Details";

describe("Details", () => {
  const summary = "Resumen";
  const content = "Contenido expandible";

  it("renderiza el summary y el children", () => {
    render(<Details summary={summary}>{content}</Details>);
    expect(screen.getByText(summary)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("aplica la clase base y la variante por defecto (card)", () => {
    render(<Details summary={summary}>{content}</Details>);
    const details = screen.getByText(summary).closest("details");
    expect(details?.className).toMatch(/container/);
    expect(details?.className).toMatch(/card/);
  });

  it("aplica la clase de variante ghost", () => {
    render(
      <Details summary={summary} variant="ghost">
        {content}
      </Details>
    );
    const details = screen.getByText(summary).closest("details");
    expect(details?.className).toMatch(/ghost/);
  });

  it("aplica la clase de variante ghost-circle-icon", () => {
    render(
      <Details summary={summary} variant="ghost-circle-icon">
        {content}
      </Details>
    );
    const details = screen.getByText(summary).closest("details");
    expect(details?.className).toMatch(/ghost-circle-icon/);
  });

  it("aplica className adicional si se proporciona", () => {
    render(
      <Details summary={summary} className="custom-class">
        {content}
      </Details>
    );
    const details = screen.getByText(summary).closest("details");
    expect(details?.className).toMatch(/custom-class/);
  });

  it("renderiza la píldora de estado si pillText y pillVariant están definidos", () => {
    render(
      <Details summary={summary} pillText="Estado" pillVariant="success">
        {content}
      </Details>
    );
    expect(screen.getByText("Estado")).toBeInTheDocument();
  });

  it("no renderiza la píldora si falta pillText o pillVariant", () => {
    render(
      <Details summary={summary} pillText="Estado">
        {content}
      </Details>
    );
    expect(screen.queryByText("Estado")).not.toBeInTheDocument();

    render(
      <Details summary={summary} pillVariant="success">
        {content}
      </Details>
    );
    expect(screen.queryByText("success")).not.toBeInTheDocument();
  });

  it("renderiza slotRight si se proporciona y no la píldora", () => {
    render(
      <Details
        summary={summary}
        pillText="Estado"
        pillVariant="success"
        slotRight={<span data-testid="slot-right">Slot</span>}
      >
        {content}
      </Details>
    );
    expect(screen.getByTestId("slot-right")).toBeInTheDocument();
    expect(screen.queryByText("Estado")).not.toBeInTheDocument();
  });

  it("el details inicia abierto si defaultOpen es true", () => {
    render(
      <Details summary={summary} defaultOpen>
        {content}
      </Details>
    );
    const details = screen.getByText(summary).closest("details");
    expect(details?.hasAttribute("open")).toBe(true);
  });

  it("el details inicia cerrado si defaultOpen es false", () => {
    render(
      <Details summary={summary} defaultOpen={false}>
        {content}
      </Details>
    );
    const details = screen.getByText(summary).closest("details");
    expect(details?.hasAttribute("open")).toBe(false);
  });

  it("renderiza el ícono de chevron en el summary", () => {
    render(<Details summary={summary}>{content}</Details>);
    // Busca el elemento SVG con el ícono de chevron
    const chevronIcon = document.querySelector("svg");
    expect(chevronIcon).toBeInTheDocument();
  });

  it("no renderiza tooltip cuando showIconTooltip es false (por defecto)", () => {
    render(<Details summary={summary}>{content}</Details>);
    const chevronIcon = document.querySelector("svg");
    expect(chevronIcon).toBeInTheDocument();
    // Verificar que no hay tooltip visible inicialmente
    expect(screen.queryByText("Expandir detalles")).not.toBeInTheDocument();
  });

  it("renderiza tooltip cuando showIconTooltip es true", async () => {
    render(
      <Details
        summary={summary}
        showIconTooltip={true}
        iconTooltipText="Expandir para ver más"
      >
        {content}
      </Details>
    );

    // Buscar el SVG del icono (está dentro del Tooltip)
    const svgIcon = document.querySelector("svg");
    expect(svgIcon).toBeInTheDocument();

    // El Tooltip envuelve el icono, buscar el contenedor del tooltip
    // Estructura: Tooltip container > Tooltip trigger > Icon > SVG
    const iconContainer = svgIcon?.parentElement; // div.icon
    const tooltipTrigger = iconContainer?.parentElement; // div.trigger
    const tooltipContainer = tooltipTrigger?.parentElement; // div.container del Tooltip

    // Hacer hover sobre el trigger del tooltip para mostrar el tooltip
    if (tooltipTrigger) {
      fireEvent.mouseEnter(tooltipTrigger);

      await waitFor(() => {
        expect(screen.getByText("Expandir para ver más")).toBeInTheDocument();
      });
    }
  });

  it("muestra el texto correcto del tooltip cuando está cerrado", async () => {
    render(
      <Details
        summary={summary}
        showIconTooltip={true}
        iconTooltipText="Expandir detalles"
        iconTooltipTextOpen="Cerrar detalles"
        defaultOpen={false}
      >
        {content}
      </Details>
    );

    const svgIcon = document.querySelector("svg");
    const iconContainer = svgIcon?.parentElement;
    const tooltipTrigger = iconContainer?.parentElement;

    if (tooltipTrigger) {
      fireEvent.mouseEnter(tooltipTrigger);

      await waitFor(() => {
        expect(screen.getByText("Expandir detalles")).toBeInTheDocument();
        expect(screen.queryByText("Cerrar detalles")).not.toBeInTheDocument();
      });
    }
  });

  it("muestra el texto correcto del tooltip cuando está abierto", async () => {
    render(
      <Details
        summary={summary}
        showIconTooltip={true}
        iconTooltipText="Expandir detalles"
        iconTooltipTextOpen="Cerrar detalles"
        defaultOpen={true}
      >
        {content}
      </Details>
    );

    const svgIcon = document.querySelector("svg");
    const iconContainer = svgIcon?.parentElement;
    const tooltipTrigger = iconContainer?.parentElement;

    if (tooltipTrigger) {
      fireEvent.mouseEnter(tooltipTrigger);

      await waitFor(() => {
        expect(screen.getByText("Cerrar detalles")).toBeInTheDocument();
        expect(screen.queryByText("Expandir detalles")).not.toBeInTheDocument();
      });
    }
  });

  it("cambia el texto del tooltip cuando se abre/cierra el details", async () => {
    render(
      <Details
        summary={summary}
        showIconTooltip={true}
        iconTooltipText="Expandir detalles"
        iconTooltipTextOpen="Cerrar detalles"
        defaultOpen={false}
      >
        {content}
      </Details>
    );

    const details = screen.getByText(summary).closest("details");
    const svgIcon = document.querySelector("svg");
    const iconContainer = svgIcon?.parentElement;
    const tooltipTrigger = iconContainer?.parentElement;

    if (tooltipTrigger && details) {
      // Verificar tooltip cuando está cerrado
      fireEvent.mouseEnter(tooltipTrigger);
      await waitFor(() => {
        expect(screen.getByText("Expandir detalles")).toBeInTheDocument();
      });

      fireEvent.mouseLeave(tooltipTrigger);

      // Esperar a que el tooltip se oculte
      await waitFor(
        () => {
          expect(
            screen.queryByText("Expandir detalles")
          ).not.toBeInTheDocument();
        },
        { timeout: 1000 }
      );

      // Abrir el details haciendo click en el summary
      const summaryElement = screen.getByText(summary).closest("summary");
      if (summaryElement) {
        fireEvent.click(summaryElement);
      }

      // Esperar a que el estado se actualice
      await waitFor(() => {
        expect(details?.hasAttribute("open")).toBe(true);
      });

      // Verificar tooltip cuando está abierto
      fireEvent.mouseEnter(tooltipTrigger);
      await waitFor(() => {
        expect(screen.getByText("Cerrar detalles")).toBeInTheDocument();
      });
    }
  });

  it("usa los valores por defecto del tooltip cuando no se especifican", async () => {
    render(
      <Details summary={summary} showIconTooltip={true}>
        {content}
      </Details>
    );

    const svgIcon = document.querySelector("svg");
    const iconContainer = svgIcon?.parentElement;
    const tooltipTrigger = iconContainer?.parentElement;

    if (tooltipTrigger) {
      fireEvent.mouseEnter(tooltipTrigger);

      await waitFor(() => {
        // Debe usar los valores por defecto: "Expandir detalles"
        expect(screen.getByText("Expandir detalles")).toBeInTheDocument();
      });
    }
  });
});
