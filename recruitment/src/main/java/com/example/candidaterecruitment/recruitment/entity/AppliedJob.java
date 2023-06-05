package com.example.candidaterecruitment.recruitment.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "applied_jobs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppliedJob {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long appliedJobId;

    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;

    @ManyToOne
    @JoinColumn(name = "candidate_id")
    private Candidate candidate;

    @ManyToOne
    @JoinColumn(name = "recruiter_id")
    private Recruiter recruiter;

    @Column(name = "status")
    private String appliedJobStatus;

    @Column(name = "scheduled_time")
    private LocalDateTime appliedJobInterviewScheduledTime;

    @Column(name = "feedback")
    private String appliedJobFeedback;
}
