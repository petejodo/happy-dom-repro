import { render, screen } from "@testing-library/react";
import { Example } from "./example";

const css = `
.hidden { display: none; }

@media (min-width: 768px) {
    .md-flex {
        display: flex;
    }

    .md\:flex {
        display: flex;
    }
}
`;

test("should be visible", () => {
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    // @ts-ignore
    window.happyDOM.setInnerWidth(768);

    render(<Example />)
    expect(screen.getByText("example with dash")).toBeVisible()
    expect(screen.getByText("example with tailwind-like class")).toBeVisible()
});
