---
layout: page
title: Qi She（佘琪）'s publication
subtitle: publication
---

### **Selected Top-tier Publication**

[Note] below peer-reviewed paper are updated by 04/15, 2024, and the full and most updated publication can be found at [Google Scholar Page: Qi She](https://scholar.google.com/citations?user=iHoGTt4AAAAJ&hl=zh-CN)

#### **Journal**

<div id="container-publications">
<div class="row">
<div class="col-xs-12 col-md-12">
<ul> 
{% for pub in site.data.publications %}
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="{{ pub.url }}"><i>{{ pub.title }}</i></a>  
    </span>
    <div class="pub-authors" itemprop="author">
        {{ pub.authors }}
    </div>
    <div class="pub-publication">
    {{ pub.venue }}, {{ pub.year }}. 
    </div>

<p>
{% if pub.pdf %}
<a class="btn btn-default" href="{{ pub.pdf }}">
PDF
</a>
{% endif %}

{% if pub.bibtex %}
<a class="btn btn-default" href="{{ pub.bibtex }}">
BibTex
</a>
{% endif %}

{% if pub.code %}
<a class="btn btn-default" href="{{ pub.code }}">
Code
</a>
{% endif %}

</p>
</li>
{% endfor %}
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://ieeexplore.ieee.org/abstract/document/9941061"><i>Power Law in Deep Neural Networks: Sparse Network Generation and Continual Learning With Preferential Attachment</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Fan Feng, Lu Hou, <b> Qi She </b>, Rosa H. M. Chan, James T Kwok
    </div>
    <div class="pub-publication">
    IEEE Transactions on Neural Networks and Learning Systems (<b>TNNLS</b>), 2022. 
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/bibtex/TNNLS22_powerlaw.bib.txt">
BibTex
</a>

</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://dl.acm.org/doi/abs/10.1145/3439723"><i>Generative Adversarial Networks in <b>Computer Vision</b>: A Survey and Taxonomy</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Zhengwei Wang, <b> Qi She </b>, Tomas E Ward.
    </div>
    <div class="pub-publication">
    ACM Computing Surveys (<b>CSUR</b>), 2021. <img alt="GitHub stars" src="https://img.shields.io/github/stars/sheqi/GAN_Review?label=Stars&style=social">
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CSUR20.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CSUR20.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/sheqi/GAN_Review">
Code
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/1906.01529">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://dl.acm.org/doi/full/10.1145/3559540"><i>Generative Adversarial Networks in <b>Time Series</b>: A Systematic Literature Review</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Eoin Brophy, Zhengwei Wang, <b> Qi She </b>, Tomas E Ward.
    </div>
    <div class="pub-publication">
    ACM Computing Surveys (<b>CSUR</b>), 2023. 
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CSUR23.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CSUR23.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/2107.11098">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://ieeexplore.ieee.org/abstract/document/9420306"><i>An Effcient and Flexible Spike Train Model via Empirical Bayes</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        <b> Qi She </b>, Xiaoli Wu, Beth Jelfs, Adam S. Charles, Rosa H. M. Chan.
    </div>
    <div class="pub-publication">
    IEEE Transactions on Signal Processing (<b>TSP</b>), 2021. 
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/TSP21.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/TSP21.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/cuckoong/EB_spikes_trains">
Code
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/1605.02869">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0925231220306548"><i>Synthetic-Neuroscore: Using a Neuro-AI Interface for Evaluating Generative Adversarial Networks</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
     Zhengwei Wang, <b> Qi She </b>, Alan F Smeaton, Tomas E Ward, Graham Healy.
    </div>
    <div class="pub-publication">
    Neurocomputing, 2020. 
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/NC20.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/NC20.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/villawang/Neuro-AI-Interface">
Code
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/1905.04243">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://www.nature.com/articles/srep21468"><i>Evaluating the Small-World-Ness of a Sampled Network: Functional Connectivity of Entorhinal-Hippocampal Circuitry</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
     <b> Qi She </b>, Guanrong Chen, Rosa H. M. Chan.
    </div>
    <div class="pub-publication">
    <b>Nature Scientific Reports</b>, 2016.
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/NSR2016.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/NSR21.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://www.nature.com/articles/srep21468">
Nature Scientific Reports
</a>
</p>
</li>
</ul> 

</div>
</div>
</div>

#### **Conference**

<div id="container-publications">
<div class="row">
<div class="col-xs-12 col-md-12">

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://proceedings.mlr.press/v162/shen22c.html"><i>PDO-s3DCNNs: Partial Differential Operator Based Steerable 3D CNNs
</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Zhenyang Shen, Tao Hong, <b>Qi She</b>, Jinwei Ma, Zhouchen Lin
    </div>
    <div class="pub-publication">
    International Conference on Machine Learning (<b>ICML</b>), 2022.
    <!--<img alt="GitHub stars" src="https://img.shields.io/github/stars/zh460045050/SNL_ICCV2021?label=Stars&style=social"> -->
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/ICML2022_PDO.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/ICML22_PDO.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://arxiv.org/pdf/2208.03720">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/CVPR2022/html/Zhu_Weakly_Supervised_Object_Localization_As_Domain_Adaption_CVPR_2022_paper.html"><i>Weakly Supervised Object Localization as Domain Adaption
</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Lei Zhu, <b>Qi She</b>, Qian Chen, Yunfei You, Boyu Wang, Yanye Lu
    </div>
    <div class="pub-publication">
    Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2022.
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/zh460045050/DA-WSOL_CVPR2022?label=Stars&style=social">
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CVPR2022_WDA.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CVPR22_WDA.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/zh460045050/DA-WSOL_CVPR2022">
Code
</a>

</p>
</li>
</ul> 



<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/CVPR2022/html/Yi_On_Learning_Contrastive_Representations_for_Learning_With_Noisy_Labels_CVPR_2022_paper.html"><i>On Learning Contrastive Representations for Learning with Noisy Labels
</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Li Yi, Sheng Liu, <b>Qi She</b>, Lei Zhu, A. Ian McLeod, Boyu Wang
    </div>
    <div class="pub-publication">
    Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2022.
    <!--<img alt="GitHub stars" src="https://img.shields.io/github/stars/zh460045050/SNL_ICCV2021?label=Stars&style=social"> -->
    </div>


<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CVPR2022_noisylabel.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CVPR22_noisylabel.bib.txt">
BibTex
</a>

 <!--
<a class="btn btn-default" href="https://github.com/zh460045050/SNL_ICCV2021">
Code
</a>
-->


<a class="btn btn-default" href="https://arxiv.org/abs/2203.01785">
arXiv
</a>
</p>
</li>
</ul> 


<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/CVPR2022/html/Xiao_Learning_From_Temporal_Gradient_for_Semi-Supervised_Action_Recognition_CVPR_2022_paper.html"><i>Learning from Temporal Gradient for Semi-supervised Action Recognition
</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Junfei Xiao, Longlong Jing, Lin Zhang, Ju He, <b>Qi She</b>, Zongwei Zhou, Alan Yuille, Yingwei Li
    </div>
    <div class="pub-publication">
    Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2022.
    <!--<img alt="GitHub stars" src="https://img.shields.io/github/stars/zh460045050/SNL_ICCV2021?label=Stars&style=social"> -->
    </div>


<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CVPR2022_temporalgradient.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CVPR22_temporalgradient.bib.txt">
BibTex
</a>

 <!--
<a class="btn btn-default" href="https://github.com/zh460045050/SNL_ICCV2021">
Code
</a>
-->
</p>
</li>
</ul> 



<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/ICCV2021/html/Zhu_Unifying_Nonlocal_Blocks_for_Neural_Networks_ICCV_2021_paper.html"><i>Unifying Nonlocal Blocks for Neural Networks</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Lei Zhu, <b>Qi She</b>, Duo Li, Yanye Lu, Xuejing Kang, Jie Hu, Changhu Wang
    </div>
    <div class="pub-publication">
    International Conference on Computer Vision (<b>ICCV</b>), 2021.
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/zh460045050/SNL_ICCV2021?label=Stars&style=social">
    </div>


<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/ICCV2021_nonlocal.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/ICCV21_nolocal.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/zh460045050/SNL_ICCV2021">
Code
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/2108.02451">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/ICCV2021/html/Feng_MT-ORL_Multi-Task_Occlusion_Relationship_Learning_ICCV_2021_paper.html"><i>MT-ORL: Multi-Task Occlusion Relationship Learning</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Panhe Feng, <b>Qi She</b>, Lei Zhu, Jiaxin Li, Lin ZHANG, Zijian Feng, Changhu Wang, Chunpeng Li, Xuejing Kang, Anlong Ming.
    </div>
    <div class="pub-publication">
    International Conference on Computer Vision (<b>ICCV</b>), 2021.
     <!--<img alt="GitHub stars" src="https://img.shields.io/github/stars/fengpanhe/MT-ORL?label=Stars&style=social">-->
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/ICCV2021_mtorl.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/ICCV21_mtorl.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/fengpanhe/MT-ORL">
Code
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/2108.05722">
arXiv
</a>
</p>
</li>
</ul> 


<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/ICCV2021/html/Li_MINE_Towards_Continuous_Depth_MPI_With_NeRF_for_Novel_View_ICCV_2021_paper.html"><i>MINE: Towards Continuous Depth MPI with NeRF for Novel View Synthesis</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Jiaxin Li, Zijian Feng, <b>Qi She</b>, Henghui Ding, Changhu Wang, Gim Hee Lee.
    </div>
    <div class="pub-publication">
    International Conference on Computer Vision (<b>ICCV</b>), 2021.
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/vincentfung13/MINE?label=Stars&style=social">
    </div>


<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/ICCV2021_mine.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/ICCV21_mine.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/vincentfung13/MINE">
Code
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/2103.14910">
arXiv
</a>
</p>
</li>
</ul> 


<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/CVPR2021/html/Li_Involution_Inverting_the_Inherence_of_Convolution_for_Visual_Recognition_CVPR_2021_paper.html"><i>Involution: Inverting the Inherence of Convolution for Visual Recognition</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Duo Li, Jie Hu, Changhu Wang, Xiangtai Li, <b>Qi She</b>, Lei Zhu, Tong Zhang, Qifeng Chen.
    </div>
    <div class="pub-publication">
    Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2021.
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/d-li14/involution?label=Stars&style=social">
    </div>


<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CVPR2021_involution.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CVPR21_involution.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/d-li14/involution">
Code
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/2103.06255">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/CVPR2021/html/Wang_ACTION-Net_Multipath_Excitation_for_Action_Recognition_CVPR_2021_paper.html"><i>ACTION-Net: Multipath Excitation for Action Recognition</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Zhengwei Wang, <b>Qi She</b>, Aljosa Smolic.
    </div>
    <div class="pub-publication">
    Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2021. <img alt="GitHub stars" src="https://img.shields.io/github/stars/V-Sense/ACTION-Net?label=Stars&style=social">
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CVPR2021_actionnet.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CVPR21_actionnet.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/V-Sense/ACTION-Net">
Code
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/2103.07372">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/CVPR2021/html/Zhu_Learning_the_Superpixel_in_a_Non-Iterative_and_Lifelong_Manner_CVPR_2021_paper.html"><i>Learning the Superpixel in a Non-iterative and Lifelong Manner</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Lei Zhu, <b>Qi She</b>, Bin Zhang, Yanye Lu, Zhilin Lu, Duo Li, Jie Hu.
    </div>
    <div class="pub-publication">
    Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2021. <img alt="GitHub stars" src="https://img.shields.io/github/stars/zh460045050/LNSNet?label=Stars&style=social">
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CVPR2021_superpixel.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CVPR21_superpixel.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/zh460045050/LNSNet">
Code
</a>

</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://ieeexplore.ieee.org/abstract/document/9196887"><i>OpenLORIS-Object: A Robotic Vision Dataset and Benchmark for Lifelong Deep Learning</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        <b>Qi She</b>, Fan Feng, Xinyue Hao, Qihan Yang, Chuanlin Lan, Vincenzo Lomonaco, Xuesong Shi, Zhengwei Wang, Yao Guo, Yimin Zhang, Fei Qiao, Rosa H. M. Chan.
    </div>
    <div class="pub-publication">
    The International Conference on Robotics and Automation (<b>ICRA</b>), 2020. <img alt="GitHub stars" src="https://img.shields.io/github/stars/lifelong-robotic-vision/lifelong-robotic-vision.github.io?label=Stars&style=social">
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/ICRA2020_obj.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/ICRA20_obj.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://lifelong-robotic-vision.github.io/dataset/object">
Project page
</a>

<a class="btn btn-default" href="https://github.com/lifelong-robotic-vision/OpenLORIS-Object">
Code
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/1911.06487">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://ieeexplore.ieee.org/abstract/document/9196638"><i>Are We Ready for Service Robots? The OpenLORIS-Scene Datasets for Lifelong SLAM</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
     Xuesong Shi, Dongjiang Li, Pengpeng Zhao, Qinbin Tian, Yuxin Tian, Qiwei Long, Chunhao Zhu, Jingwei Song, Fei Qiao, Le Song, Yangquan Guo, Zhigang Wang, Yimin Zhang, Baoxing Qin, Wei Yang, Fangshi Wang, Rosa H. M. Chan, <b>Qi She</b>
    </div>
    <div class="pub-publication">
    The International Conference on Robotics and Automation (<b>ICRA</b>), 2020. <img alt="GitHub stars" src="https://img.shields.io/github/stars/lifelong-robotic-vision/lifelong-robotic-vision.github.io?label=Stars&style=social">
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/ICRA2020_Scene.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/ICRA20_scene.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://lifelong-robotic-vision.github.io/dataset/scene">
Project page
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/1911.05603">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://proceedings.mlr.press/v115/she20a.html"><i>Neural Dynamics Discovery via Gaussian Process Recurrent Neural Networks</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        <b> Qi She </b>, Anqi Wu.
    </div>
    <div class="pub-publication">
    Uncertainty in Artificial Intelligence (<b>UAI</b>), 2019. <img alt="GitHub stars" src="https://img.shields.io/github/stars/sheqi/GP-RNN_UAI2019?label=Stars&style=social">
    </div>

<p>
<a class="btn btn-default" href="https://www.youtube.com/watch?v=oEIIFZRjObc">
Oral
</a>

<a class="btn btn-default" href="https://sheqi.github.io/pdf/UAI2019.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/UAI19.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/sheqi/GP-RNN_UAI2019">
Code
</a>

<a class="btn btn-default" href="https://sheqi.github.io/sm/UAI2019.pdf">
Supp. Materials
</a>

<a class="btn btn-default" href="https://arxiv.org/abs/1907.00650">
arXiv
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://ojs.aaai.org/index.php/AAAI/article/view/11666"><i>Reduced-Rank Linear Dynamical Systems</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        <b> Qi She </b>, Yuan Gao, Kai Xu, and Rosa H.M. Chan.
    </div>
    <div class="pub-publication">
    AAAI Conference on Artificial Intelligence (<b>AAAI</b>), 2018.
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/AAAI2018.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/AAAI18.bib.txt">
BibTex
</a>
</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://ieeexplore.ieee.org/abstract/document/8461755/"><i>Stochastic Dynamical Systems Based Latent Structure Discovery in High-dimensional Time Series</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        <b> Qi She </b>, Rosa H.M. Chan.
    </div>
    <div class="pub-publication">
    The international Conference on Acoustics, Speech, & Signal Processing (<b>ICASSP</b>), 2018.
    </div>

<p>
</p>
</li>
</ul> 
</div>
</div>
</div>

#### **Workshop**

<div id="container-publications">
<div class="row">
<div class="col-xs-12 col-md-12">


<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content/CVPR2021W/CLVision/html/Lomonaco_Avalanche_An_End-to-End_Library_for_Continual_Learning_CVPRW_2021_paper.html"><i>Avalanche: an End-to-End Library for Continual Learning</i></a>
    </span>
    <div class="pub-publication">
    <b>CVPR</b> 2021, Workshop on Continual Learning in Computer Vision. <img alt="GitHub stars" src="https://img.shields.io/github/stars/ContinualAI/avalanche?label=Stars&style=social">
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CVPRW2021_avalanche.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CVPRW21_avalanche.bib.txt">
BibTex
</a>

<a class="btn btn-default" href="https://github.com/ContinualAI/avalanche">
Code
</a>

</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://openaccess.thecvf.com/content_CVPRW_2020/html/w15/Wang_CatNet_Class_Incremental_3D_ConvNets_for_Lifelong_Egocentric_Gesture_Recognition_CVPRW_2020_paper.html"><i>CatNet: Class Incremental 3D ConvNets for Lifelong Egocentric Gesture Recognition</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Zhengwei Wang, <b> Qi She </b>, Tejo Chalasani, Aljosa Smolic.
    </div>
    <div class="pub-publication">
    <b>CVPR</b> 2020, Workshop on Continual Learning in Computer Vision. 
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/CVPRW2020_CatNet.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/CVPRW20_CatNet.bib.txt">
BibTex
</a>

</p>
</li>
</ul> 

<ul> 
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="https://baicsworkshop.github.io/program/baics_21.html"><i>A Neuro-AI Interface for Evaluating Generative Adversarial Networks</i></a>
    </span>
    <div class="pub-authors" itemprop="author">
        Zhengwei Wang, <b> Qi She </b>, Alan F. Smeaton, Tomas E. Ward, Graham Healy.
    </div>
    <div class="pub-publication">
    <b>ICLR</b> 2020, Workshop on Bridging AI and Cognitive Science. 
    </div>

<p>
<a class="btn btn-default" href="https://sheqi.github.io/pdf/ICLRW2020_Neuroscore.pdf">
PDF
</a>

<a class="btn btn-default" href="https://sheqi.github.io/bibtex/ICLRW20_Neuroscore.bib.txt">
BibTex
</a>

</p>
</li>
</ul> 


</div>
</div>
</div>
