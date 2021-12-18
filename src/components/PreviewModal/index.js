import { Modal } from "@mui/material";
import React, { useState } from "react";
import FeaturedMovie from "../FeaturedMovie";
import './styles.css'

export default ({ onClose = () => { }, itemSelected, Children }) => {

    return (
        <div>
            <Modal
                open={true}
                onClose={onClose}
            >
                <div className="preview-modal">
                    <div className="preview-modal--main">
                        <div className="preview-modal--main-header">
                            <button onClick={onClose}>X</button>
                        </div>
                        <FeaturedMovie item={itemSelected} />

                    </div>
                </div>

            </Modal>

        </div>
    )
}