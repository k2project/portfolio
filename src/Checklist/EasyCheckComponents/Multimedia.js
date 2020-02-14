import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Multimedia() {
    const accordionData = {
        heading: 3,
        title: 'MULTIMEDIA',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist multimedia'
                >
                    <ChecklistLiEl id='aec-multimedia-1'>
                        Ensure that the media player controls are labeled and
                        keyboard accessible.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-multimedia-2'>
                        Audio (including background noise and video with sound)
                        should not start automatically when a web page opens.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-multimedia-3'>
                        If audio starts automatically when the page opens, it
                        should either: stop after 3 seconds, or include controls
                        to pause/stop or turn down the volume.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-multimedia-4'>
                        Ensure audio descriptions, transcripts, and captioning
                        for video.
                    </ChecklistLiEl>
                </ul>
                <section>
                    <h4 className='checklist__subcaption' id='media-capt'>
                        Captions
                    </h4>
                    <ul
                        className='checklist__list'
                        aria-labelledby='media-capt'
                    >
                        <ChecklistLiEl id='aec-multimedia-5'>
                            {' '}
                            Captions in the specific language need to be listed.
                        </ChecklistLiEl>
                        <ChecklistLiEl id='aec-multimedia-6'>
                            Check that the captions seem in sync with the spoken
                            content.
                        </ChecklistLiEl>
                        <ChecklistLiEl id='aec-multimedia-7'>
                            Check that the people who are speaking are
                            identified in captions when they speak.
                        </ChecklistLiEl>
                        <ChecklistLiEl id='aec-multimedia-8'>
                            Check for the important sound other than dialogue
                            being included in captions.
                        </ChecklistLiEl>
                    </ul>
                </section>
                <section>
                    <h4 className='checklist__subcaption' id='media-trans'>
                        Transcript
                    </h4>
                    <ul
                        className='checklist__list'
                        aria-labelledby='media-trans'
                    >
                        <ChecklistLiEl id='aec-trans-1'>
                            It is best practice to provide both captions and
                            transcripts, although not always required.
                        </ChecklistLiEl>
                        <ChecklistLiEl id='aec-trans-2'>
                            Transcripts should be easy to find near the
                            audio/video itself and any links to the audio/video.
                        </ChecklistLiEl>
                        <ChecklistLiEl id='aec-trans-3'>
                            Check that transcripts include all audio
                            information, including dialogue with the speakers
                            identified, and all important sound .
                        </ChecklistLiEl>
                        <ChecklistLiEl id='aec-trans-4'>
                            A transcript for a video could provide all the audio
                            and all the visual information, so that a person can
                            get all the content of the video by reading the
                            text.
                        </ChecklistLiEl>
                    </ul>
                </section>
                <section>
                    <h4 className='checklist__subcaption' id='media-desc'>
                        Audio Description (Visual Interpretation)
                    </h4>
                    <ul
                        className='checklist__list'
                        aria-labelledby='media-desc'
                    >
                        <ChecklistLiEl id='aec-desc-1'>
                            {' '}
                            Check for either audio track with someone describing
                            the important visuals (can be included in the main
                            video, or it can be provided in a separate video) or
                            text transcript, that includes description of
                            meaningful visual information (like screenplay).
                        </ChecklistLiEl>
                    </ul>
                </section>
            </section>
        </AccordionWidget>
    );
}
export default Multimedia;
