"use client"
import { useEffect } from "react";
import React from "react";
import axios from "axios"
import {
    Input,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { useState } from "react";


export const fetchStreamsList = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/StreamsList`, {
            params: { token: JSON.parse(localStorage.getItem("token")), }
        });
        return response.data
    } catch (error) {

        return []
    }
}

const BanUser = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [HlsList, setHlsList] = useState([]);
    const [hls, setHls] = useState("")
    const [id, setid] = useState("")


    const handelStart = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/start`, {
                token: JSON.parse(localStorage.getItem("token")),
                target: hls
            });
            const newHlsLİst = HlsList.map((e) => {
                if (e.id == hls.split("|")[0]) {
                    return response.data
                }
                return e
            })
            setHlsList(newHlsLİst)
            setHls("");
            alert("stream created")
        } catch (error) {
            alert("stream didnt create")
        }
    }
    const handleStop = async () => {
        try {
            if (!id) {
                alert("please enter the id")
                return
            }
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/stop`, {
                token: JSON.parse(localStorage.getItem("token")),
                id
            });
            setid("");
            alert("stream stoped")
        } catch (error) {
            alert("stream didint stop")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStreamsList();
            setHlsList(data.Streams);
        };

        fetchData();
    }, []);


    return (
        <div className="flex flex-col gap-6 overflow-x-hidden">

            <Button color="success" onPress={onOpen}>
                Start Live Stream
            </Button>

            <div className="flex flex-row flex-1 gap-4">
                <div className="flex flex-col gap-2 overflow-auto p-2 ">
                    <h1 className="text-2xl text-white font-bold">Streams List</h1>
                    {
                        HlsList.map((e, index) => {
                            return <p key={index} className="border-2 border-red-600 p-2 text-start text-wrap rounded-xl text-green-300">{e.pid}-{e.name}-{e.id}</p>
                        })
                    }
                </div>
            </div>




            <Modal backdrop="blur" isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
                <ModalContent className="bg-black">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">stream events</ModalHeader>
                            <ModalBody>
                                <Input
                                    label="hls"
                                    placeholder="Enter hls"
                                    variant="bordered"
                                    color="success"
                                    type="text"
                                    value={hls}
                                    onChange={(e) => setHls(e.target.value)}
                                />
                                <h2>------------------------Stop Live Stream--------------------------</h2>
                                <Input
                                    label="id"
                                    placeholder="Enter id"
                                    variant="bordered"
                                    color="success"
                                    type="text"
                                    value={id}
                                    onChange={(e) => setid(e.target.value)}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" variant="bordered" onPress={handelStart}>
                                    Start
                                </Button>
                                <Button color="success" variant="bordered" onPress={handleStop}>
                                    Stop
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    )
}


export default BanUser;