package com.example.candidaterecruitment.recruitment.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "candidates")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private String candidateId;

    @Column(name = "name")
    private String candidateName;

    @Column(name = "email")
    private String candidateEmail;

    @Column(name = "password")
    private String candidatePassword;

    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
    private Set<AppliedJob> appliedJobs = new HashSet<AppliedJob>();
}
