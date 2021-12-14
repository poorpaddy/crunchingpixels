import React from "react";

const Overview = () => {
  return (
    <div className="mt-[18px]">
      <h3 className="text-primary text-xl">Overview</h3>
      <p className="text-sm leading-6 mt-[17px]">
        IFAW is a prime example of client referral. IFAW needed an Intranet of
        sorts that would be easy to manage, easy to extend and reachable from
        every continent. I chose to use WordPress for this because it’s user
        interface is relatively straight forward and doesn’t require much more
        knowledge beyond what users need to utilize the Microsoft Office suite.
      </p>
      <p className="text-sm leading-6 mt-[17px]">
        The primary challenges were integrating day to day processes with
        technologies they are already familiar with. Several custom plugins were
        created and or modified existing ones to adapt such process. The site
        consists of 5 different posts types ranging from basic interface
        modifications to posts formulated to act, behave, like Acrobat forms.
        These custom post types were even setup to run automated tasks and
        receive PDF form submissions.
      </p>
    </div>
  );
};

export default Overview;
