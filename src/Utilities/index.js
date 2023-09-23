import "./index.css";

// Hero 
export function Hero({ children, centerContent = false, transparent= false, container, className }) {
  return (
    <div className="hero">
        <div className={`overlay ${transparent && 'transparent'}`}></div>
        <div className={`container d-flex align-items-center min-vh-100 w-100 ${centerContent && "justify-content-center"} ${className} pt pb-5`}>
          <div style={{maxWidth: `${container ? `${container}px` : "initial"}`}} className="w-100 h-100">
            {children}
          </div>
        </div>
    </div>
  );
}

// Button
export function Button({ children, type, color, className }) {
  return (
    <button className={`btn btn-${type}-${color} ${className}`}>
      {children}
    </button>
  );
}

// Section Divider
export function Section({ children, mt, className, name ,expand = false, center, container}) {
  return (
    <div id={`${name}`} className={`${className} py-5 w-100 h-100`} style={{ marginTop: `${mt}px` }}>
      <div className={`container ${expand ? 'container-expand' : ""} h-100`}>
        <div style={{maxWidth: `${container ? `${container}px` : "initial"}`}} className={`${center && 'mx-auto' } h-100`}>
              {children}
            </div>
        </div>
    </div>
  );
}
