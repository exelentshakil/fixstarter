/**
 * Auto-generated Media Assets from Pexels API
 * Project: fixstarter
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "3520679",
    "url": "https://images.pexels.com/photos/3520679/pexels-photo-3520679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Detailed black and white image of a computer circuit board, showcasing technology components.",
    "avg_color": "#0A0A0A"
},
  editorialPhotos: [
    {
    "id": "18468459",
    "url": "https://images.pexels.com/photos/18468459/pexels-photo-18468459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Detailed view of metal industrial structures with pipes and beams against a clear blue sky.",
    "avg_color": "#3C638C"
},
    {
    "id": "1432794",
    "url": "https://images.pexels.com/photos/1432794/pexels-photo-1432794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Detailed view of components on a computer motherboard, showcasing technology and circuitry.",
    "avg_color": "#64686E"
},
    {
    "id": "39256644",
    "url": "https://images.pexels.com/photos/39256644/pexels-photo-39256644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Front view of the TU Delft Reactor Institute, Netherlands in daylight.",
    "avg_color": "#8C9195"
}
  ],
  ambientVideo: {
    "id": "17599632",
    "videoUrl": "https://videos.pexels.com/video-files/17599632/17599632-hd_1280_720_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/17599632/3d-arcadian-cgi-digital-17599632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 1280,
    "height": 720
}
};
