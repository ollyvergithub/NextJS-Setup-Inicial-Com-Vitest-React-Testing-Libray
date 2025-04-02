"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
    const handleClick = () => {
        console.log("Botão clicado!"); // Ação a ser testada
    };

    return (
        <div>
            <h1>Auto Servico Next Vitest</h1>
            <Button onClick={() => handleClick()}>Clique-me</Button>
        </div>
    );
}
