import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import ckaImage from '../assets/images/cka.png';
import az900 from '../assets/images/az900.png'
import az104 from '../assets/images/az104.png'
import az305 from '../assets/images/az305.png'
import tf003 from '../assets/images/tf003.png'

const ckaTechStack = [
  "K8s Admin",
  "Pod Scheduling",
  "Docker Lifecycle",
  "Linux Troubleshooting",
  "Shell Scripting",
  "Git",
];

const az900TechStack = [
  "Azure Core Services",
  "Cloud Concepts",
  "RBAC & Policies",
  "PowerShell Basics",
  "ARM & Bicep Intro",
];

const az104TechStack = [
  "Azure VMs & VNets",
  "Azure CLI & PowerShell",
  "Azure AD & RBAC",
  "Monitoring & Logs",
  "IaC: Bicep & ARM",
  "Azure DevOps",
  "Linux in Azure",
];

const az305TechStack = [
  "Azure Architecture",
  "HA & DR Planning",
  "Security Design",
  "Hybrid Networking",
  "IaC: Terraform/Bicep",
  "CI/CD with DevOps",
];

const tf003TechStack = [
  "Terraform Modules",
  "Azure & AWS Infra",
  "IaC & GitOps",
  "CI/CD with GitHub",
  "Python Automation",
  "Secrets Mgmt",
];



function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Certifications</h1>
            <div className="skills-grid">
                <div className="skill">
                    <img src={ckaImage} alt="Avatar" className="skill-image" />
                    <h3>Certified Kubernetes Administrator (CKA)</h3>
                    <p>Linux Foundation and the Cloud Native Computing Foundation (CNCF)</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {ckaTechStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <img src={az900} alt="Avatar" className="skill-image" />
                    <h3>Azure Fundamentals (AZ-900)</h3>
                    <p>Microsoft</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {az900TechStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <img src={az104} alt="Avatar" className="skill-image" />
                    <h3>Azure Administrator Associate (AZ-104)</h3>
                    <p>Microsoft</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {az104TechStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
                <div className="skill">
                    <img src={az305} alt="Avatar" className="skill-image" />
                    <h3>Azure Solutions Architect Expert (AZ-305)</h3>
                    <p>Microsoft</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {az305TechStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <img src={tf003} alt="Avatar" className="skill-image" />
                    <h3>Terraform Associate (003)</h3>
                    <p>HashiCorp</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {tf003TechStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;