import React, { useEffect, useState } from 'react';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import axios from 'axios';

// Helper: Format numbers (e.g., 2300000 -> 2.3M)
const formatCount = (num) => {
    if (!num) return '';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
    return num;
};

// Use Vite env variables with import.meta.env
const YOUTUBE_CHANNEL_ID = 'UCw7E5WnV4RS0LlwM651c01A'; // Monkey Magic channel ID
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const INSTAGRAM_USER_ID = import.meta.env.VITE_INSTAGRAM_USER_ID;
const INSTAGRAM_ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
const TWITTER_USER_ID = import.meta.env.VITE_TWITTER_USER_ID;
const TWITTER_BEARER_TOKEN = import.meta.env.VITE_TWITTER_BEARER_TOKEN;

const AchievementsSection = () => {
    const [followers, setFollowers] = useState({
        youtube: null,
        instagram: null,
        twitter: null,
    });
    const [loading, setLoading] = useState(true);

    // Fetch follower counts from APIs
    useEffect(() => {
        const fetchCounts = async () => {
            setLoading(true);
            let youtube = null, instagram = null, twitter = null;

            // YouTube API
            try {
                if (YOUTUBE_API_KEY) {
                    const ytRes = await axios.get(
                        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
                    );
                    youtube = ytRes.data.items[0]?.statistics?.subscriberCount;
                }
            } catch {
                youtube = 2300000; // Fallback
            }

            // Instagram API
            try {
                if (INSTAGRAM_USER_ID && INSTAGRAM_ACCESS_TOKEN) {
                    const igRes = await axios.get(
                        `https://graph.instagram.com/${INSTAGRAM_USER_ID}?fields=followers_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`
                    );
                    instagram = igRes.data.followers_count;
                }
            } catch {
                instagram = 480800; // Fallback
            }

            // Twitter/X API
            try {
                if (TWITTER_USER_ID && TWITTER_BEARER_TOKEN) {
                    const twRes = await axios.get(
                        `https://api.twitter.com/2/users/${TWITTER_USER_ID}`,
                        {
                            headers: { Authorization: `Bearer ${TWITTER_BEARER_TOKEN}` },
                            params: { 'user.fields': 'public_metrics' },
                        }
                    );
                    twitter = twRes.data.data?.public_metrics?.followers_count;
                }
            } catch {
                twitter = 500000; // Fallback
            }

            setFollowers({ youtube, instagram, twitter });
            setLoading(false);
        };

        fetchCounts();
    }, []);

    return (
        <section className="w-full py-12 bg-gradient-to-r from-red-500 via-red-600 to-red-700">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-white text-center mb-10">
                Monkey Magic’s Global Reach
            </h2>
            {/* Cards */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* YouTube Card */}
                    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-red-500 p-8 shadow-lg bg-red-700/70 transition-transform duration-200 hover:scale-105 hover:shadow-red-500/50 animate-bounceIn">
                        <FaYoutube className="text-5xl text-white mb-3" />
                        <span className="font-montserrat text-lg text-white mb-2">YouTube Subscribers</span>
                        <span className="font-poppins text-xl text-white">
                            {loading ? (
                                <span className="flex items-center">
                                    <span className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin mr-2"></span>
                                    Fetching followers...
                                </span>
                            ) : (
                                `${formatCount(followers.youtube)}+`
                            )}
                        </span>
                    </div>
                    {/* Instagram Card */}
                    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-red-500 p-8 shadow-lg bg-red-700/70 transition-transform duration-200 hover:scale-105 hover:shadow-red-500/50 animate-bounceIn delay-200">
                        <FaInstagram className="text-5xl text-white mb-3" />
                        <span className="font-montserrat text-lg text-white mb-2">Instagram Followers</span>
                        <span className="font-poppins text-xl text-white">
                            {loading ? (
                                <span className="flex items-center">
                                    <span className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin mr-2"></span>
                                    Fetching followers...
                                </span>
                            ) : (
                                `${formatCount(followers.instagram)}+`
                            )}
                        </span>
                    </div>
                    {/* Twitter/X Card */}
                    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-red-500 p-8 shadow-lg bg-red-700/70 transition-transform duration-200 hover:scale-105 hover:shadow-red-500/50 animate-bounceIn delay-400">
                        <FaTwitter className="text-5xl text-white mb-3" />
                        <span className="font-montserrat text-lg text-white mb-2">Twitter/X Followers</span>
                        <span className="font-poppins text-xl text-white">
                            {loading ? (
                                <span className="flex items-center">
                                    <span className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin mr-2"></span>
                                    Fetching followers...
                                </span>
                            ) : (
                                `${formatCount(followers.twitter)}+`
                            )}
                        </span>
                    </div>
                </div>
            </div>        
        </section>
    );


}
export default AchievementsSection;