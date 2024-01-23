import React, { useEffect } from "react";

interface SlideProps {
    // show/hide divs
    isOpen: boolean
    // amount of divs
    amount: number
    // milliseconds between each div's transition
    time: number
}

let rows: number[] = []
let divs: any[] = []


const SlideScreen: React.FC<SlideProps> = (props: SlideProps) => {

    useEffect(() => {
        // clear array
        rows = []
        
        // fill empty array with numbers according to amount passed in props
        for (let i = 0; i < props.amount; i++) {
            rows.push(i)
        }

        // create divs
        divs = rows.map (
            (row) => {
                return <div id={`slide-div-${row}`} key={row} className={`w-screen relative flex-1 transition-all ${props.isOpen ? "right-[90%]" : "right-[10%]"}`}/>
            }
        )

        for (let i = 0; i < rows.length; i++) {
            let slideDiv: any = document.querySelector(`#slide-div-${i}`)
            if (slideDiv) {
                slideDiv.style.backgroundColor = `rgb(12,${i * 2},212)` 
                slideDiv.style.transitionDuration = `${(i + props.time) * 5}ms`
            }
        }
    }, [props])

    return (
        <div id="test-div" className={`w-screen h-screen z-10 fixed top-0 flex transition-all flex-col ${props.isOpen ? "right-[10%]" :  "right-[90%]"}`}>
        {
            divs
        }
        </div>
    )
}

export default SlideScreen