---
layout: post
title: "Involution: Rethinking the Core of Convolutional Neural Networks"
date: 2021-06-20 09:00:00 +0800
description: "Involution introduces a new atomic operation for deep neural networks that inverts the design principles of standard convolution — spatial-specific and channel-agnostic — achieving better performance with lower computational cost."
keywords: "Involution, convolution, CVPR 2021, neural network, computer vision, deep learning, self-attention, visual recognition"
categories: [Research, Computer Vision]
---

Standard convolution has dominated visual recognition for nearly a decade. But its two core design principles — **spatial-agnostic** (the same kernel across all positions) and **channel-specific** (different kernels per channel) — may not be the right inductive biases for vision.

Our CVPR 2021 paper [**Involution: Inverting the Inherence of Convolution for Visual Recognition**](https://openaccess.thecvf.com/content/CVPR2021/html/Li_Involution_Inverting_the_Inherence_of_Convolution_for_Visual_Recognition_CVPR_2021_paper.html) proposes a novel atomic operation that **inverts** these principles.

## The Core Idea

Involution is **spatial-specific and channel-agnostic**:

- **Spatial-specific**: a different kernel is generated for each spatial location, capturing position-dependent context
- **Channel-agnostic**: the same kernel is shared across all channels, reducing redundancy

This simple inversion leads to a surprisingly capable and efficient operator. Notably, self-attention — the driving force behind Vision Transformers — can be seen as a special case of involution.

## Results

Replacing convolution with involution in standard ResNet-50 backbones:

| Task | Dataset | Improvement |
|---|---|---|
| Classification | ImageNet | +1.6% top-1 accuracy |
| Detection | COCO | +2.5% box AP |
| Segmentation | COCO | +2.4% mask AP |
| Semantic Seg. | Cityscapes | +4.7% mIoU |

With **lower** FLOPs: 66%, 65%, 72%, and 57% of the convolutional baseline respectively.

## Why It Matters

Involution provides a unified framework connecting convolution, self-attention, and dynamic filtering — clarifying the design space of neural network operations for vision. It shows that the right inductive bias can yield both better accuracy and better efficiency simultaneously.

Code and pretrained models: [github.com/d-li14/involution](https://github.com/d-li14/involution)  
arXiv: [arxiv.org/abs/2103.06255](https://arxiv.org/abs/2103.06255)
