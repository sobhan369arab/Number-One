import { useState, useRef } from "react";
import CreateModal from "../CreateModal"
import { useDisclosure } from "@nextui-org/react"
import { CloseIcon } from "../../../../core/icon";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop,} from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css'
import setCanvasPreview from "./setCanvasPreview";

const CropProfile = ({ previews, setPreviews }) => {
    console.log(previews)
    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    // Crop
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [crop, setCrop] = useState()
    // when image is load
    const onImageLoad = (event) => {
        const { width, height } = event.currentTarget;
        const cropWidthInPercent = (150 / width) * 100;

        const crop = makeAspectCrop(
            { unit: "%", width: cropWidthInPercent, },
            1,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    };

    return (
        <>
            <button onClick={() => { onOpen() }} className="absolute font-IranSans rounded-lg border-2 border-neutral-200 hover:bg-white/20 duration-200 text-neutral-200 px-6 py-2">برش</button>
            <CreateModal isOpen={isOpen} onClose={onClose}>
                <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-0 right-0">
                    <CloseIcon />
                </div>
                <div className="flex flex-col items-center">
                    <ReactCrop
                        crop={crop}
                        onChange={percentCrop => setCrop(percentCrop)}
                        circularCrop
                        keepSelection
                        aspect={1}
                        minWidth={150}
                    >
                        <img ref={imgRef} src={previews} alt="Upload" style={{ maxHeight: "50vh" }} onLoad={onImageLoad} />
                    </ReactCrop>
                    <button
                        className="py-2 font-IranSans px-10 rounded-full bg-yellowCustom mt-4 buttonYellow_shadow duration-150"
                        onClick={() => {
                            setCanvasPreview(
                                imgRef.current,
                                previewCanvasRef.current,
                                convertToPixelCrop(
                                    crop,
                                    imgRef.current.width,
                                    imgRef.current.height
                                )
                            );
                            const dataUrl = previewCanvasRef.current.toDataURL();
                            setPreviews(dataUrl);
                            onClose()
                        }}
                    >
                        برش
                    </button>
                </div>
                {crop && (
                    <canvas
                        ref={previewCanvasRef}
                        className="mt-4"
                        style={{
                            display: "none",
                            border: "1px solid black",
                            objectFit: "contain",
                            width: 150,
                            height: 150,
                        }}
                    />
                )}
            </CreateModal>
        </>
    )
}

export default CropProfile
