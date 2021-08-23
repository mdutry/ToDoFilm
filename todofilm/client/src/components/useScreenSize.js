import { useState, useEffect } from "react";

// hook via https://www.kevin-nkonda.com/Un-hook-pour-detecter-la-largeur-de-l-ecran/
function useScreenSize() {
    const isClient = typeof window === "object";
    // on détecte si on est côté client

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }
    // retourne un objet contenant la hauteur et la largeur de la fenêtre

    const [screenSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // useEffect s'assure qu'on est côté client, met à jour l'état screenSize
    // à chaque changement de taille de la fenêtre

    return screenSize;
    // l'objet screenSize est retourné pour pouvoir être utilisé !
}

export default useScreenSize; 