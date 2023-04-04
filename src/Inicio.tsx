import './css/input.css'
import { Link } from 'react-router-dom'

const Inicio = () => {
    return (
        <>
        <h1 className="titleInicio">Multigame</h1>
        <div>
            <div className="container">
                <div className="card1">
                    <div className="cardTop">
                        <h2 className='titleCard'>Memotest</h2>
                    </div>
                    <div className="cardBottom">
                        <button className="btnCard">
                            <Link className='link' to={'/memotest'}>
                                Play!
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="card2">
                <div className="cardTop">
                        <h2 className='titleCard'>Words PM</h2>
                    </div>
                    <div className="cardBottom">
                        <button className="btnCard">
                            <Link className='link' to={'/wpm'}>
                                Play!
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="card3">
                <div className="cardTop">
                        <h2 className='titleCard'>Who is it?</h2>
                    </div>
                    <div className="cardBottom">
                        <button className="btnCard">
                            <Link className='link' to={'/pokemon'}>
                                Play!
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Inicio