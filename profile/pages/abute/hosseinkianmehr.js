import { Avatar, Box, Chip, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import CardEvidence from '../../component/abute/card'
import MyProjects from '../../component/home/myProjects'

import axios from "axios";


export default function index({ posts }) {


    return (
        <>  { /* Description */ }
            <Grid container>
                <Grid xs={12} sm={6} md={4} item
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box style={{ margin: 30 }}>
                        <Image src={'/image/1.jpg'} width={400} height={400} style={{ borderRadius: 1000 }} />
                    </Box>

                </Grid>
                <Grid xs={12} sm={6} md={8} item>
                    <Typography variant='h4'>hossein kianmerh</Typography>
                    <Typography variant='body1'>
                        A blog (a truncation of "weblog")[1] is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.
                    </Typography>
                </Grid>
            </Grid>
            { /* skill */ }
            <Divider style={{ marginBlock: 30, marginTop: 30 }}>
                <Chip label={
                    <Typography variant='h5'>skills</Typography>
                } />
            </Divider>
            <Grid container >
                {posts.skills.map((item, index) => {
                    return (

                        <Grid xs={12} sm={6} md={3} item key={index}>
                            <Typography variant='h5'>{item.title}</Typography>
                            <ul>

                                {item.skill.map((items, index) => {
                                    console.log('sdafs', item)
                                    return (
                                        <li key={index}><Typography variant='body1' >{items.skill}</Typography></li>
                                    )
                                })}

                            </ul>
                        </Grid>
                    )
                }

                )}
            </Grid>
            { /* Evidence */ }
            <Divider style={{ marginBlock: 30, marginTop: 30 }}>
                <Chip label={
                    <Typography variant='h5'>Evidence</Typography>
                } />
            </Divider>
            <CardEvidence  post={posts.Evidence}/>
            { /* work */ }
            <Divider style={{ marginBlock: 30, marginTop: 30 }}>
                <Chip label={
                    <Typography variant='h5'>Work</Typography>
                } />
            </Divider>
            <MyProjects post={posts.projects}/>
        </>
    )
}


export async function getStaticProps() {
    const response = await axios.get(`http://localhost:3000/api/abute/hossein`);

    return {
        props: {
            posts: response.data,
        },
    };
}