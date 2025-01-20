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
        const response = await axios.post(process.env.URL ? process.env.URL : "http://localhost:5000/api/ActiveStreams/admin/read", {
            token: JSON.parse(localStorage.getItem("token")),
        });
        return response.data.list;
    } catch (error) {
        console.log(error);
        return []
    }
}

const CreateLiveModel = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [LiveStreams, setLiveStreams] = useState([]);
    const [Form, setForm] = useState({
        url: "",
        name: ""
    })



    const handelCreateStream = async () => {
        try {
            const response = await axios.post(process.env.URL ? process.env.URL : "http://localhost:5000/api/ActiveStreams/admin/create", {
                token: JSON.parse(localStorage.getItem("token")),
                url: Form.url,
                name: Form.name
            });
            setForm({
                url: "",
                name: ""
            })
            setLiveStreams([...LiveStreams, response.data]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStreamsList();
            setLiveStreams(data);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-6">


            <div className="flex flex-row justify-center gap-4">
                <Button color="success" onPress={onOpen}>
                    Create Live Stream
                </Button>
            </div>



            <div className="flex flex-row flex-1 gap-4">
                <div className="flex flex-col gap-2 overflow-auto p-2 ">
                    <h1 className="text-2xl text-white font-bold text-center">Streams</h1>
                    {
                        LiveStreams.map((e) => {
                            return <p key={e._id} className="border-2 border-red-600 p-2 rounded-xl text-green-300" disabled>{e.teamA} VS {e.teamB} -- {e.date} -- {e.url}</p>
                        })
                    }
                </div>
            </div>



            <Modal backdrop="blur" isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
                <ModalContent className="bg-black">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Ban User</ModalHeader>
                            <ModalBody>
                                <Input
                                    label="link"
                                    placeholder="Enter the link"
                                    variant="bordered"
                                    color="success"
                                    type="text"
                                    value={Form.url}
                                    onChange={(e) => setForm({ ...Form, url: e.target.value })}
                                />
                                <Input
                                    label="name"
                                    placeholder="Enter the name"
                                    variant="bordered"
                                    color="success"
                                    type="text"
                                    value={Form.name}
                                    onChange={(e) => setForm({ ...Form, name: e.target.value })}
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" variant="bordered" onPress={handelCreateStream}>
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}


export default CreateLiveModel;