import './Circle.css'
function Circle(props) {
    const { color, left, top, width, height } = props;
    
    return (
        
        <div style={{
            position: "absolute",
            backgroundColor: color,
            width: width,
            height: height,
            borderRadius: 50,
            marginLeft: left,
            marginTop: top,
            border: 1
            
        }}>
           


        </div>
        
        
    )

}
export default Circle;