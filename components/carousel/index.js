import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images/lib/components';
import { Header } from './components';
import {colors, largeDevice} from '../../lib/theme';
import 'glider-js/glider.min';

const gutter = 2;
const slider = React.createRef();
const navButtonStyles = base => ({
    ...base,
    backgroundColor: 'white',
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.18)',
    color: colors.N60,

    '&:hover, &:active': {
        backgroundColor: 'white',
        color: colors.N100,
        opacity: 1,
    },
    '&:active': {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.14)',
        transform: 'scale(0.96)',
    },
});

export default class ImageViewer extends Component {
    state = { currentModal: null };

    toggleModal = index => {
        this.setState({ currentModal: index });
    };

    componentDidMount() {
        new window.Glider(slider.current, {
            slidesToShow: 3,
            draggable: true,
            responsive: [
                {
                    // screens greater than >= 775px
                    breakpoint: 768,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: 'auto',
                        slidesToScroll: 'auto',
                        itemWidth: 150,
                        duration: 0.25
                    }
                },{
                    // screens greater than >= 1024px
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        duration: 0.25
                    }
                }
            ]
        });
    }

    render() {
        const { images } = this.props;
        const { currentModal } = this.state;

        return (
            <div>
                <div className="slider slider--project" ref={slider}>
                    {images.map(({ caption, source }, j) => (
                        <div
                            key={source.regular}
                            className="slider_item"
                        >
                            <div className="slider_wrapper">
                                <img
                                    alt={caption}
                                    src={source.thumbnail}
                                    className="image"
                                    style={{
                                        cursor: 'pointer',
                                        position: 'absolute',
                                        maxWidth: '100%',
                                    }}
                                />
                                <div className="show-image">
                                    <i className="far fa-2x fa-eye" onClick={() => this.toggleModal(j)}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <ModalGateway>
                    {Number.isInteger(currentModal) ? (
                        <Modal
                            allowFullscreen={false}
                            closeOnBackdropClick={false}
                            onClose={this.toggleModal}
                            styles={{
                                blanket: base => ({
                                    ...base,
                                    // backgroundColor: colors.N05,
                                }),
                                positioner: base => ({
                                    ...base,
                                    display: 'block',
                                }),
                            }}
                        >
                            <Carousel
                                currentIndex={currentModal}
                                components={{ Footer: null, Header }}
                                views={images}
                                styles={{
                                    container: base => ({
                                        ...base,
                                        height: '100vh',
                                    }),
                                    view: base => ({
                                        ...base,
                                        alignItems: 'center',
                                        display: 'flex ',
                                        height: 'calc(100vh - 54px)',
                                        justifyContent: 'center',

                                        [largeDevice]: {
                                            padding: 20,
                                        },

                                        '& > img': {
                                            maxHeight: 'calc(100vh - 94px)',
                                        },
                                    }),
                                    navigationPrev: navButtonStyles,
                                    navigationNext: navButtonStyles,
                                }}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        );
    }
}