import { useEffect } from "react";
export default function useOnClickOutside(modalRef, handler) {
	useEffect(() => {
		function listener(e) {
			if (modalRef.current?.contains(e.target)) {
				return;
			}
			handler();
		}
		document.body.addEventListener("mousedown", listener);
		document.body.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, []);
}
