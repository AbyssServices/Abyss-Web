/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/classes/math/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/class/uv.handler.js',
    client: '/class/uv.client.js',
    bundle: '/class/uv.bundle.js',
    config: '/class/uv.config.js',
    sw: '/class/uv.sw.js',
};
