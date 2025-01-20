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


export const fetchBanList = async () => {
    try {
        const response = await axios.post(process.env.URL ? process.env.URL : "http://localhost:5000/api/BanUser/BanList", {
            token: JSON.parse(localStorage.getItem("token")),
        });
        return response.data.loggedIPs;
    } catch (error) {
        console.log(error);
        return []
    }
}

const BanUser = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [BanList, setBanList] = useState([12, 121, 42.2132]);
    const [ip, setip] = useState("")



    const handelBan = async () => {
        try {
            const response = await axios.post(process.env.URL ? process.env.URL : "http://localhost:5000/api/BanUser/Ban", {
                token: JSON.parse(localStorage.getItem("token")),
                ip
            });
            setip("");
            setBanList([...BanList,response.data.ip])
            alert(response.data.status)
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchBanList();
            setBanList(data);
        };

        fetchData();
    }, []);


    return (
        <div className="flex flex-col gap-6">

            <Button color="success" onPress={onOpen}>
                Ban a User
            </Button>

            <div className="flex flex-row flex-1 gap-4">
                <div className="flex flex-col gap-2 overflow-auto p-2 ">
                    <h1 className="text-2xl text-white font-bold">Ban List</h1>
                    {
                        BanList.map((e) => {
                            return <Button color="danger" variant="bordered" disabled>{e}</Button>
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
                                    label="ip"
                                    placeholder="Enter ip"
                                    variant="bordered"
                                    color="success"
                                    type="text"
                                    value={ip}
                                    onChange={(e) => setip(e.target.value)}
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" variant="bordered" onPress={handelBan}>
                                    Ban
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