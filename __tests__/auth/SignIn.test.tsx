import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AuthForm from "@/components/AuthForm";
import { afterEach, describe, expect, it, vi } from "vitest";
import { apiClient } from "@/lib/apiClient";


describe("AuthForm Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.resetAllMocks(); // Restablece los mocks a su estado original
    vi.restoreAllMocks(); // Restaura las implementaciones originales
  });


  it("handles sign-in form submission successfully", async () => {
    render(<AuthForm type="sign-in" />);
    // Mock del cliente API
    vi.mock("@/lib/apiClient", () => ({
        apiClient: {
        post: vi.fn(),
        },
    }));

    (apiClient.post as jest.Mock).mockResolvedValueOnce({
        data: { code: 200, message: "mocked-jwt-token" },
      });

    // Mock de useRouter de next/navigation
    vi.mock("next/navigation", () => ({
        useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        pathname: "/",
        query: {},
        asPath: "/",
        }),
    }));

    const passwordInput = screen.getAllByPlaceholderText("Enter your password")[0];

    const usernameInput = screen.getAllByPlaceholderText("Enter your username")[0]

    // Completa los campos de inicio de sesión
    fireEvent.change(usernameInput, {
      target: { value: "testuser" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "password123" },
    });

    // Simula el clic en el botón "Sign In"
    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));

    // Verifica que se llame al endpoint correcto con los datos proporcionados
    await waitFor(() =>
      expect(apiClient.post).toHaveBeenCalledWith("/users/login", {
        username: "testuser",
        password: "password123",
      })
    );
  });

});
