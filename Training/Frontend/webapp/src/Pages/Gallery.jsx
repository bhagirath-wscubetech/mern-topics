import React from 'react'
import Container from '../Components/Container'
import ImgBox from '../Components/ImgBox'
export default function Gallery() {
    return (
        <>
            <Container>
                <h3 className='text-center mt-2'>Gallery</h3>
            </Container>
            <Container>
                <div className="col-3">
                    <ImgBox source="https://picsum.photos/200/300?random=1" />
                </div>
                <div className="col-3">
                    <ImgBox source="https://picsum.photos/200/300?random=2" />
                </div>
                <div className="col-3">
                    <ImgBox source="https://picsum.photos/200/300?random=3" />
                </div>
                <div className="col-3">
                    <ImgBox source="https://picsum.photos/200/300?random=4" />
                </div>
            </Container>
            <Container>
                <div className="col-6">
                    <ImgBox source="https://picsum.photos/200/300?random=5" />
                </div>
                <div className="col-6">
                    <ImgBox source="https://picsum.photos/200/300?random=6" />
                </div>
            </Container>
        </>
    )
}
