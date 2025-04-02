import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "../app/page";
import { Button } from "@/components/ui/button";

const navigateMock = vi.fn();

describe("Testa a página Home", () => {
    test("Deve haver um título 'Auto Servico Next Vitest'", async () => {
        render(<Page />);
        const title = await screen.findByRole("heading", {
            name: "Auto Servico Next Vitest",
        });

        expect(title.textContent).toBe("Auto Servico Next Vitest");

        expect(
            screen.getByRole("heading", {
                level: 1,
                name: "Auto Servico Next Vitest",
            })
        ).toBeDefined();
    });

    test("Deve haver um botão na página", () => {
        render(<Page />); // Renderize o componente primeiro!
        const button = screen.getByRole("button"); // Use `getByRole` (síncrono) ou `await findByRole` (assíncrono)
        expect(button).toBeInTheDocument();
    });

    test("Deve simular clique no botão login", async () => {
        //const user = userEvent.setup();
        // render(<Page />);

        // // Encontra o botão
        // const button = screen.getByRole("button", { name: "Clique-me" });

        // // Espiona a função console.log (opcional)
        // const consoleSpy = vi.spyOn(console, "log");

        // // Simula o click
        // fireEvent.click(button);

        // // Verifica se console.log foi chamado
        // expect(consoleSpy).toHaveBeenCalledWith("Botão clicado!");

        // // Limpa o spy após o teste
        // consoleSpy.mockRestore();

        // const button = await screen.findByRole("button");

        // fireEvent.click(button);

        // expect(navigateMock).toHaveBeenCalledTimes(0);

        // ******************

        // const button = screen.getByRole("button", { name: "Clique-me" });
        // const consoleSpy = vi.spyOn(console, "log");

        // await user.click(button); // Simula click com userEvent

        // expect(consoleSpy).toHaveBeenCalledWith("Botão clicado!");
        // consoleSpy.mockRestore();

        // ******************

        // const mockHandleClick = vi.fn(); // Cria uma função mock
        // render(<Button onClick={mockHandleClick}>Clique-me</Button>);

        // fireEvent.click(screen.getByRole("button"));
        // expect(mockHandleClick).toHaveBeenCalledTimes(1); // Verifica se foi chamada 1 vez
    });
});
