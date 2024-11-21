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

  it("handles sign-up form submission successfully", async () => {
    render(<AuthForm type="sign-up" />);
    // Mock del cliente API
    vi.mock("@/lib/apiClient", () => ({
        apiClient: {
        post: vi.fn(),
        },
    }));

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

    (apiClient.post as jest.Mock).mockResolvedValueOnce({
        data: { code: 201 },
    });

    const passwordInput = screen.getAllByPlaceholderText("Enter your password")[0];

    const usernameInput = screen.getAllByPlaceholderText("Enter your username")[0]

    fireEvent.change(screen.getByPlaceholderText("Enter your first name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your last name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(usernameInput, {
      target: { value: "testuser" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    await waitFor(() =>
      expect(apiClient.post).toHaveBeenCalledWith("/users/signup", {
        first_name: "John",
        last_name: "Doe",
        username: "testuser",
        email: "johndoe@example.com",
        password: "password123",
      })
    );
  });

});
