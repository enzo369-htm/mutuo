export function DesktopMinimumNotice() {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="desktop-minimum-title"
      className="fixed inset-0 z-[2147483647] flex flex-col items-center justify-center bg-[#f2f2f0] px-8 text-center md:hidden"
    >
      <p
        id="desktop-minimum-title"
        className="text-[clamp(1.125rem,4vw,1.35rem)] font-light tracking-tight text-neutral-900"
      >
        Abrí el sitio en una pantalla más grande
      </p>
      <p className="mt-5 max-w-[22rem] text-[13px] font-light leading-[1.75] text-neutral-600">
        Mutuo Agencia está pensado para verse en computadora. Volvé desde el navegador
        de tu PC o ensanchá la ventana hasta superar aproximadamente 768&nbsp;px de
        ancho.
      </p>
    </div>
  );
}
