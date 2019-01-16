module.exports = {
    "db": {
        "name": "db",
        "connector": "memory"
    },
    "mLabs": {
        "connector": "loopback-connector-mongodb",
        "url": `mongodb://${process.env.MLAB_USER_NAME}:${process.env.MLAB_PW}@ds157654.mlab.com:57654/loopbacktest`,
        "name": "mLabs"
    },
    "MongoDB": {
        "connector": "loopback-connector-mongodb",
        "name": "MongoDB"
    }
}