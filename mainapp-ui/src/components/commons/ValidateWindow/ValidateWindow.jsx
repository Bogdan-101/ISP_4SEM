import "./ValidateWindow.css";

export const ValidateWindow = ({ isValid }) => (
    <span className="validateIcon">{isValid ? '✅' : '❌'}</span>
);
