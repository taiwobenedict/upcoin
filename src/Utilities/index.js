import "./index.css";

// Hero
export function Hero({ children, centerContent = false, transparent = false, container, className, expand }) {
	return (
		<div className="hero">
			<div className={`overlay ${transparent && "transparent"}`}></div>
			<div className={`d-flex align-items-center min-vh-100 w-100 pb-5 ${ centerContent && "justify-content-center mx-auto"} ${className} pt ${expand ? "container-fluid" : ""}`}>
				<div style={{ maxWidth: `${container ? `${container}px` : "initial"}` }} className="w-100 h-100" >
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
export function Section({ children, mt, className, name, expand = false, center, container, pd }) {
	return (
		<div id={`${name}`} className={`py-5 w-100 h-100  ${pd}`} style={{ marginTop: `${mt}px` }}>
			<div className={`${expand ? "container-fluid" : ""} h-100 ${className}`}>
				<div style={{ maxWidth: `${container ? `${container}px` : "initial"}` }} className={`${center && "mx-auto"} h-100`}>
					{children}
				</div>
			</div>
		</div>
	);
}
