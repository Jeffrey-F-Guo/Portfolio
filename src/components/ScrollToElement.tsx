export const Scroll = (target:string) => {
     const id = document.getElementById(target);
     if (id) {
        id.scrollIntoView({ behavior: "smooth" })
     }

}