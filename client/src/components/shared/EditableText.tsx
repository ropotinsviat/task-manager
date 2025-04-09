import React, { useState, useRef, useEffect } from "react";

type EditableTextProps = {
  value: string;
  onEdit: (newValue: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  multiline?: boolean;
};

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onEdit,
  placeholder = "Click to edit",
  className = "",
  inputClassName = "",
  multiline = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleBlur = (): void => {
    setIsEditing(false);
    if (currentValue !== value) {
      onEdit(currentValue.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter" && !multiline) {
      inputRef.current?.blur();
    } else if (e.key === "Escape") {
      setCurrentValue(value);
      setIsEditing(false);
    }
  };

  return (
    <div className={`relative ${className}`} onClick={() => setIsEditing(true)}>
      {isEditing ? (
        multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className={inputClassName}
            rows={3}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className={inputClassName}
          />
        )
      ) : (
        value || <span className="text-[#A4A5AB]">{placeholder}</span>
      )}
    </div>
  );
};
