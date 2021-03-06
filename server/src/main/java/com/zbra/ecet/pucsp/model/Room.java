package com.zbra.ecet.pucsp.model;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Room {

    private final String id;
    private final String name;
    private final List<Message> messages;
    private final List<User> users;

    public Room(String name) {
        this.name = name;
        id = UUID.randomUUID().toString();
        messages = new ArrayList<>();
        users = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void addMessage(Message message) {
        message.setRoomId(id);
        messages.add(message);
    }

    public void addUser(User user) {
        users.add(user);
    }

    public void removeUser(User user) {
        users.remove(user);
    }

    public Message[] getMessages() {
        return messages.toArray(new Message[messages.size()]);
    }

    public User[] getUsers() {
        return users.toArray(new User[users.size()]);
    }
}
