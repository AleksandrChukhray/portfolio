import React from 'react'

export const Close = React.forwardRef(({ onClose }, ref) => <div className="navigation_close"
onClick={onClose}
ref={ref}/>);

export default Close
