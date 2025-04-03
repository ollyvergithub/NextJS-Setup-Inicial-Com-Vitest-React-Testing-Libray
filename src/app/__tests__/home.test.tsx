import { render, screen, fireEvent } from "@testing-library/react";
import Page from "../page";

describe("Testa a página Home", () => {
    test("Deve haver um título 'Setup Inicial NextJS com Vitest e React Testing Library'", async () => {
        render(<Page />);
        const title = await screen.findByRole("heading", {
            name: "Setup Inicial NextJS com Vitest e React Testing Library",
        });

        expect(title.textContent).toBe(
            "Setup Inicial NextJS com Vitest e React Testing Library"
        );

        expect(
            screen.getByRole("heading", {
                level: 1,
                name: "Setup Inicial NextJS com Vitest e React Testing Library",
            })
        ).toBeDefined();
    });

    test("Deve haver um botão na página", () => {
        render(<Page />); // Renderize o componente primeiro!
        const button = screen.getByRole("button"); // Use `getByRole` (síncrono) ou `await findByRole` (assíncrono)
        expect(button).toBeInTheDocument();
    });

    test("Deve simular clique no botão login", async () => {
        render(<Page />);

        // Encontra o botão
        const button = screen.getByRole("button", { name: "Clique-me" });

        // Espiona a função console.log (opcional)
        const consoleSpy = vi.spyOn(console, "log");

        // Simula o click
        fireEvent.click(button);

        // Verifica se console.log foi chamado
        expect(consoleSpy).toHaveBeenCalledWith("Botão clicado!");

        // Limpa o spy após o teste
        consoleSpy.mockRestore();
    });
});
