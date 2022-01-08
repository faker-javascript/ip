export default function fakeIP() {
    return Math.floor(Math.random() * 255) + '.' + 
           Math.floor(Math.random() * 255) + '.' + 
           Math.floor(Math.random() * 255) + '.' + 
           Math.floor(Math.random() * 255);
};