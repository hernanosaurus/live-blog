import { IconProps } from "../../config/types";

export function Thumbtack({ color = "#fff", size = 10, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      style={{ ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M6.034 2c0.009-1.101 0.899-1.991 1.999-2h16.001c1.062 0 2 0.938 2 2-0.009 1.101-0.899 1.991-1.999 2h-1.876l0.688 9.312c2.332 1.269 4.101 3.324 4.973 5.801l0.023 0.074 0.064 0.189c0.189 0.624 0.064 1.312-0.314 1.811-0.326 0.493-0.878 0.814-1.505 0.814-0.020 0-0.040-0-0.060-0.001l0.003 0h-20c-0.688 0-1.248-0.25-1.626-0.813-0.248-0.337-0.397-0.76-0.397-1.218 0-0.211 0.032-0.415 0.091-0.607l-0.004 0.015 0.064-0.189c0.895-2.552 2.665-4.607 4.943-5.848l0.055-0.028 0.688-9.312h-1.811c-0.008 0-0.017 0-0.026 0-1.090 0-1.974-0.884-1.974-1.974 0-0.009 0-0.018 0-0.027v0.001zM18.033 24v6c-0.009 1.101-0.899 1.991-1.999 2h-0.001c-0.008 0-0.017 0-0.026 0-1.090 0-1.974-0.884-1.974-1.974 0-0.009 0-0.018 0-0.027v0.001-6h4z"
      ></path>
    </svg>
  );
}

export function Link({ color = "#fff", size = 10, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      style={{ ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M8.192 9.411c1.385-1.374 3.293-2.224 5.399-2.224s4.014 0.849 5.4 2.224l-0-0c1.395 1.395 2.259 3.323 2.259 5.453 0 1.666-0.528 3.209-1.427 4.469l0.016-0.024-0.054 0.052c-0.529 0.794-1.587 0.952-2.381 0.424-0.741-0.583-0.952-1.642-0.37-2.381l0.052-0.054c0.495-0.687 0.791-1.546 0.791-2.473 0-1.186-0.485-2.259-1.267-3.032l-0-0c-1.642-1.694-4.34-1.694-6.034 0l-5.932 5.93c-1.694 1.64-1.694 4.34 0 6.034 1.483 1.481 3.812 1.642 5.506 0.476l0.052-0.107c0.794-0.529 1.853-0.37 2.381 0.424 0.194 0.278 0.31 0.624 0.31 0.996 0 0.561-0.264 1.061-0.674 1.382l-0.004 0.003-0.107 0.054c-1.229 0.882-2.765 1.411-4.423 1.411-2.12 0-4.038-0.864-5.422-2.258l-0-0c-1.397-1.375-2.263-3.286-2.263-5.399s0.866-4.025 2.262-5.398l0.001-0.001 5.928-5.982zM23.81 22.536c-1.375 1.398-3.286 2.264-5.4 2.264s-4.025-0.866-5.399-2.263l-0.001-0.001c-1.394-1.384-2.257-3.302-2.257-5.421 0-1.659 0.529-3.194 1.426-4.446l-0.016 0.023 0.052-0.054c0.53-0.794 1.587-0.952 2.381-0.422 0.743 0.528 0.954 1.587 0.372 2.381l-0.052 0.052c-0.494 0.687-0.79 1.545-0.79 2.473 0 1.186 0.484 2.259 1.265 3.033l0 0c1.642 1.694 4.34 1.694 6.034 0l5.93-5.928c1.694-1.694 1.694-4.395 0-6.036-0.774-0.782-1.847-1.266-3.033-1.266-0.927 0-1.786 0.296-2.486 0.798l0.013-0.009-0.052 0.054c-0.278 0.209-0.629 0.334-1.009 0.334-0.564 0-1.064-0.276-1.371-0.701l-0.003-0.005c-0.194-0.278-0.31-0.623-0.31-0.995 0-0.562 0.264-1.062 0.675-1.383l0.004-0.003 0.107-0.052c1.23-0.883 2.765-1.412 4.424-1.412 2.119 0 4.037 0.863 5.421 2.257l0 0c1.397 1.375 2.263 3.286 2.263 5.399s-0.866 4.025-2.262 5.398l-5.931 5.931z"
      ></path>
    </svg>
  );
}