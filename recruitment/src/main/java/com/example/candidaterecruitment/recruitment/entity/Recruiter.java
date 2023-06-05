package com.example.candidaterecruitment.recruitment.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "recruiters")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Recruiter {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private String recruiterId;

    @Column(name = "name")
    private String recruiterName;

    @Column(name = "email")
    private String recruiterEmail;

    @Column(name = "password")
    private String recruiterPassword;

    @OneToMany
    @JoinColumn(name = "recruiter_id")
    private Set<Job> jobs = new HashSet<>();

    @OneToMany(mappedBy = "recruiter", cascade = CascadeType.ALL)
    private Set<AppliedJob> appliedJobs = new HashSet<>();
}
