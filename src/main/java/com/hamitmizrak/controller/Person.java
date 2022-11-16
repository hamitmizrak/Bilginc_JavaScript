package com.hamitmizrak.controller;

public class Person {
    private String adi;
    private String soyadi;

    //parametresiz constructor
    public Person() {
     this.adi="adi girilmedi";
     this.soyadi="soyadi girilmedi";
    }
    public Person(String adi, String soyadi) {
        this.adi = adi;
        this.soyadi = soyadi;
    }
}

class Student extends Person {
}

class MainClass{
    public static void main(String[] args) {
        var student=new Person();
    }
}
