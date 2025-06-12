import React from "react";
import mock01 from '../assets/images/jenkins-01.png';
import mock02 from '../assets/images/keyvault.png';
import mock03 from '../assets/images/terraform.png';
import mock04 from '../assets/images/archi-diag.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/BK3820/CloudResumeChallenge" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BK3820/CloudResumeChallenge" target="_blank" rel="noreferrer"><h2>Cloud Resume Challenge</h2></a>
                <p>Implemented the Cloud Resume Challenge by hosting a static resume on Azure Blob Storage with Azure CDN for HTTPS, triggering Azure Functions via JavaScript to update visitor counts stored in CosmosDB, and automating deployment with GitHub CI/CD.</p>
            </div>
            <div className="project">
                <a href="https://github.com/BK3820/k8sProject-Terraform-" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BK3820/k8sProject-Terraform-" target="_blank" rel="noreferrer"><h2>Azure DevOps End-to-End Project with Terraform | Enterprise-Grade DevOps </h2></a>
                <p>Automated AKS infrastructure provisioning using Terraform with remote state in Azure Storage, integrated with GitOps and Azure Key Vault, secured via Entra ID service principal and custom modules.</p>
            </div>
            <div className="project">
                <a href="https://github.com/BK3820/AZKeyvault" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BK3820/AZKeyvault" target="_blank" rel="noreferrer"><h2>Azure App with Managed Identity Accessing Key Vault and SQL Database</h2></a>
                <p> Securely integrated Azure App Service with Azure Key Vault and SQL Database using Managed Identity for seamless, credential-free authentication.</p>
            </div>
            <div className="project">
                <a href="https://github.com/BK3820/Terraform_Jenkins" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BK3820/Terraform_Jenkins" target="_blank" rel="noreferrer"><h2>End-to-End CI/CD Pipeline with Jenkins, Packer, and Nginx</h2></a>
                <p>A production-grade CI/CD pipeline using Jenkins (JCasC), Packer for VM/image baking, Nginx as a proxy, and state file handling for reproducible infrastructure builds.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;