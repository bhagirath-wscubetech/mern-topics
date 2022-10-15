import React from 'react'
import Container from "../Components/Container"
import ImgBox from '../Components/ImgBox'
export default function Home() {
    return (
        <>
            <Container>
                <h2 className='text-center mt-2'>Home Page</h2>
            </Container>
            <Container>
                <div className="col-12">
                    <ImgBox source="https://picsum.photos/500/300?random=1" />
                </div>
            </Container>
            <Container>
                <div className="col-4">
                    <ImgBox source="https://picsum.photos/500/300?random=2" />
                </div>
                <div className="col-4">
                    <ImgBox source="https://picsum.photos/500/300?random=3" />
                </div>
                <div className="col-4">
                    <ImgBox source="https://picsum.photos/500/300?random=4" />
                </div>
            </Container>
        </>
    )
}
