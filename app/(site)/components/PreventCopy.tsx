"use client";
import { useEffect } from "react";
import { useCurrentUser } from "sanity"; // ✅ Correct import

const PreventCopy = () => {
  const user = useCurrentUser(); // ✅ No .data

  useEffect(() => {
    if (!user) return; // ✅ Wait until user data is available

    const adminRoles = ["administrator", "editor"];
    const isAdmin = user.roles?.some((role: { name: string }) => adminRoles.includes(role.name));

    if (isAdmin) return; // ✅ Skip restrictions for admins

    // Disable text selection
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none"; // Safari support

    // Function to reset selection when component unmounts
    const enableSelection = () => {
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
    };

    // Block various key combinations
    const handleKeyDown = (event: KeyboardEvent) => {
      const blockedKeys = ["c", "x", "v", "u", "s"];
      if (event.ctrlKey && blockedKeys.includes(event.key.toLowerCase())) {
        event.preventDefault();
      }
    };

    // Block Right-Click Copy-Pasting
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleCopy = (e: ClipboardEvent) => e.preventDefault();
    const handlePaste = (e: ClipboardEvent) => e.preventDefault();
    const handleCut = (e: ClipboardEvent) => e.preventDefault();
    const handleDragStart = (e: DragEvent) => e.preventDefault();

    // Attach event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("paste", handlePaste);
    document.addEventListener("cut", handleCut);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // Remove event listeners when component unmounts
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("paste", handlePaste);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);

      // Cleanup
      enableSelection();
    };
  }, [user]);

  return null;
};

export default PreventCopy;
