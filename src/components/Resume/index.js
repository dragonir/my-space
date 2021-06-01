import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import './resume.styl';

const styles = () => ({
  resume: {
    width: '100%'
  },
  steper: {
    padding: '4px'
  }
});

function getSteps() {
  return [
    {
      label: 'INTRODUCTION',
      content: ['My name is Wangbin, graduated from Sun Yat-Sen University (2014-2018), and majored in computer science. Now I am working as a front-end computer programmer in a China LLC.']
    },
    {
      label: 'SKILL',
      content: ['HTML CSS JavaScript LESS SASS STYLUS Vue React Angular jQuery Webpack C++ Photoshop etc.']
    },
    {
      label: 'LANGUAGES',
      content: ['Chinese, English, Japanese']
    },
    {
      label: 'HOBBY',
      content: ['Coding, Painting, Reading, Go hiking, UX designing, Photographing, Cooking, etc.']
    },
    {
      label: 'CONTACT',
      content: [
        'email: dragonirxo@outlook.com',
        'github: https://github.com/dragonir',
        'leetcode: https://leetcode-cn.com/u/tricell/',
        'cnblogs: https://www.cnblogs.com/dragonir',
        'wechat: unlexx',
        'weibo: @量子破碎',
        'onmyoji: 量子破碎',
        'facebook: ░░░░░░░',
        'twitter: ░░░░░░░',
        'instagram: ░░░░░░░'
      ]
    },
    {
      label: 'OTHER',
      content: ['...']
    }
  ];
}

function Resume(props) {
  const { classes } = props;
  const [activeStep] = React.useState(-1);
  const steps = getSteps();
  return (
    <div className={classes.resume}>
      <Stepper orientation="vertical" activeStep={activeStep} className={classes.steper}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <p className="resume_label">{step.label}</p>
              {step.content.map((item, idx) => (
                <p className="resume_content" key={idx}>{item}</p>
              ))}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default withStyles(styles)(Resume);

