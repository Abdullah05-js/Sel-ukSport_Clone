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
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/admin/read`, {
            token: JSON.parse(localStorage.getItem("token")),
        });
        return response.data;
    } catch (error) {
       
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
    const [FormEdit, setFormEdit] = useState({
        url: "",
        name: "",
        liveID:""
    })
    const [formDelete,setFormDelete] = useState("");
    const [loggedIPs, setLoggedIPs] = useState([])



    const handelCreateStream = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/admin/create`, {
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
            alert("stream not created")
        }
    }

    const handelEditStream = async () => {
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/admin/edit`, {
                token: JSON.parse(localStorage.getItem("token")),
                url: FormEdit.url,
                name: FormEdit.name,
                liveID:FormEdit.liveID
            });
            setFormEdit({
                url: "",
                name: ""
            })

            if(response.data.status)
            {
                alert("stream edited successfully")
            }
            else
            {
                alert("stream not edited")
            }
        } catch (error) {
            alert("stream not edited")
        }
    }

    const handelDeleteStream = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"))
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/admin/delete`,{
                token,
                objectID:formDelete
            })
            setFormDelete("");
            
            if(response.data.status)
                {
                    alert("stream edited successfully")
                }
                else
                {
                    alert("stream not edited")
                }
        } catch (error) {
          
            alert("stream not deleted")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const { list, loggedIPs } = await fetchStreamsList();
            setLiveStreams(list);
            setLoggedIPs(loggedIPs);
        };

        const fetchInterval = setInterval(fetchData, 1000 * 5);
        fetchData();

        return () => {
            clearInterval(fetchInterval);
        }
    }, []);

    return (
        <div className="flex flex-col gap-6">


            <div className="flex flex-row justify-center gap-4">
                <Button color="success" onPress={onOpen}>
                    Create Live Stream && Edit
                </Button>
            </div>



            <div className="flex flex-row flex-1 gap-4">
                <div className="flex flex-col gap-2 overflow-auto p-2 ">
                    <h1 className="text-2xl text-white font-bold text-center">Streams</h1>
                    {
                        LiveStreams.map((e) => {
                            return <p key={e._id}  onClick={() =>  navigator.clipboard.writeText(e._id)} className="border-2 border-red-600 cursor-pointer p-2 rounded-xl text-green-300" disabled>{e.teamA} VS {e.teamB} -- {e.date} -- {e.url}</p>
                        })
                    }
                </div>



                <div className="flex flex-col gap-2 overflow-auto p-2 ">
                    <h1 className="text-2xl text-white font-bold text-center">Logged IPs</h1>
                    {
                        loggedIPs.map((e) => {
                            return <p key={e} className="border-2 border-red-600 p-2 rounded-xl text-green-300" disabled>{e}</p>
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


                                <h2>------------------------Edit Live Stream--------------------------</h2>
                                <Input
                                    label="ID"
                                    placeholder="Enter the ID"
                                    variant="bordered"
                                    color="success"
                                    type="text"
                                    value={FormEdit.liveID}
                                    onChange={(e) => setFormEdit({ ...FormEdit, liveID: e.target.value })}
                                />

                                <Input
                                    label="edit link"
                                    placeholder="Enter the link"
                                    variant="bordered"
                                    color="success"
                                    type="text"
                                    value={FormEdit.url}
                                    onChange={(e) => setFormEdit({ ...FormEdit, url: e.target.value })}
                                />

                                <Input
                                    label="edit name"
                                    placeholder="Enter the name"
                                    variant="bordered"
                                    color="success"
                                    type="text"
                                    value={FormEdit.name}
                                    onChange={(e) => setFormEdit({ ...FormEdit, name: e.target.value })}
                                />
                                <h2>------------------------Delete Live Stream--------------------------</h2>
                                <Input
                                    label="ID"
                                    placeholder="Enter the ID"
                                    variant="bordered"
                                    color="success"
                                    type="text"
                                    value={formDelete}
                                    onChange={(e) => setFormDelete(e.target.value)}
                                />


                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" variant="bordered" onPress={handelCreateStream}>
                                    Create
                                </Button>
                                <Button color="warning" variant="bordered" onPress={handelEditStream}>
                                    Edit
                                </Button>
                                <Button color="danger" variant="bordered" onPress={handelDeleteStream}>
                                    Delete
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